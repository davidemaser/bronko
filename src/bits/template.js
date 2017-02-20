/**
 * Created by David Maser on 20/02/17.
 */
var template = $$b.template;
template.collection = collection = {
    html:{
        div:'<div {#attributes}>{#content}</div>'
    },
    attributes:{
        id:'id="{#id}"',
        class:'class="{#class}"',
        name:'name="{#name}"',
        attributes:'{#key}="{#value}"'
    }
};