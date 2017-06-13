/**
 * Created by David Maser on 20/02/17.
 * @TODO: handle data packets built with the bronko.data object
 */
import * as alerts from './alerts';
export const collection = {
    html:{
        div:'<div {#attributes}>{#content}</div>',
        nav:'<nav {#attributes}>{#content}</nav>'
    },
    attributes:{
        class:'class="{#class}"',
        id:' id="{#id}"',
        attributes:' {#key}="{#value}"',
        name:' name="{#name}"'
    }
};
export function build(type,data){
    if(typeof type === 'object'){
        let rootOBJ = collection[type[0]];
        if(typeof rootOBJ === 'object'){
            pullData(rootOBJ[type[1]],data);
        }
    }else{
        alerts.create({
            type:'error',
            title:'Template Build Error',
            body:'Unable to execute the template build function. Expecting an object',
            caller:'template.build',
            log:true,
            delay:5000,
            speed:300
        })
    }
    function pullData(model,data){
        let attributeString = '';
        let params = ['class','id','attributes'];
        let content = data['content'] || null;
        let parent = data['parent'] || null;
        for(let p in params){
            let paramString = collection.attributes[params[p]];
            if(typeof data[params[p]] === 'object'){
                let paramOBJ = data[params[p]];
                for(let po in paramOBJ){
                    attributeString += paramString.replace('{#key}',po).replace('{#value}',params[p])
                }
            }else{
                attributeString += paramString.replace('{#'+params[p]+'}',params[p]);
            }
        }
        if(content !== null){
            model = model.replace('{#content}',content);
        }
        if(attributeString !== ''){
            model = model.replace('{#attributes}',attributeString)
        }
        console.log(model);
    }
};