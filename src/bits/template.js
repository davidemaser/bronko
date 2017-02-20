/**
 * Created by David Maser on 20/02/17.
 */
var template = $$b.template;
template.collection = collection = {
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
template.build=function(type,data){
    if(typeof type == 'object'){
        var rootOBJ = collection[type[0]];
        if(typeof rootOBJ == 'object'){
            pullData(rootOBJ[type[1]],data);
        }
    }
    function pullData(model,data){
        var attributeString = '';
        var params = ['class','id','attributes'];
        var content = data['content'] || null;
        var parent = data['parent'] || null;
        for(var p in params){
            var paramString = collection.attributes[params[p]];
            if(typeof data[params[p]] == 'object'){
                var paramOBJ = data[params[p]];
                for(var po in paramOBJ){
                    attributeString += paramString.replace('{#key}',po).replace('{#value}',params[p])
                }
            }else{
                attributeString +=paramString.replace('{#'+params[p]+'}',params[p]);
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