/**
 * Created by David Maser on 20/02/17.
 */
var ajax = $$b.ajax;
ajax.init=function(obj){
    /*
    pass object in the following format
    {url:'the_url',name:'unique name for dataset',key:'optional key for data'}
     */
    if(typeof obj == 'object'){
        $.ajax({
            url:config.settings.ajax.src.root+obj.url,
            method:config.settings.ajax.method,
            success:function(data){
                console.log(data);
                if(obj.name !== undefined){
                    store[obj.name] = {};
                    store[obj.name]['key'] = obj.key || undefined;
                    store[obj.name]['data'] = data;
                }
            },
            error:function(){

            }
        })
    }

};
ajax.parse=function(){

};
ajax.objectify=function(){

};