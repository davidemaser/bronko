/**
 * Created by David Maser on 21/02/17.
 */
import * as config from './config';
import * as log from './log';
export function create(args){
    /*
    args format is the following
    {type:'error',title:'string',body:'string',caller:'string',log:boolean,delay:5000,speed:300}
     */
    let _this = $(config.settings.dom.root).find('.alert');
    let speed = args.speed !== undefined && args.speed !== 0 ? args.speed : 500;
    if($(_this).length > 0){
        $(_this).remove();
    }
    let alertTemplate = {
        container:'<div class="alert {#type}" style="bottom: -100px;opacity:0;"><div class="alert_container">{#content}</div></div>',
        title:'<div class="alert_title">{#title}</div>',
        body:'<div class="alert_body">{#body}</div>'
    };
    let string = {
        title:'',
        body:'',
        internal:'',
        export:''
    };
    if(typeof args == 'object'){
        for(let a in args){
            if(args.hasOwnProperty(a)){
                if(alertTemplate[a] !== undefined){
                    string[a] = alertTemplate[a].replace('{#'+a+'}',args[a]);
                }
            }
        }
        string.internal = string.title+string.body;
        string.export = alertTemplate.container.replace('{#type}',args['type']).replace('{#content}',string.internal);
        $(config.settings.dom.root).append(string.export);
        $.when($('.alert').animate({
            opacity:1,
            bottom:0
        },speed)).done(function(){
            args.delay !== undefined && args.delay !== 0 ? alerts.destroy(args.delay) : alerts.events();
            args.log == true ? log.write({event:args.title,result:args.body,error:args.type == 'error',caller:args.caller,stamp:assistants.dateStamp()}) : '';
        })
    }else{
        console.log('Failed to create the alert object')
    }
};
export function destroy(delay) {
    delay = delay || 0;
    let _this = $(config.settings.dom.root).find('.alert');
    if ($(_this).length !== 0) {
        window.setTimeout(function () {
            $(_this).animate({
                opacity: 0,
                bottom:-100
            }, 250, function () {
                $(config.settings.dom.root).find('.alert').remove();
            })
        }, delay)
    }
}
export function events(){
    $(config.settings.dom.root).on('click','.alert',function(){
        alerts.destroy()
    })
}