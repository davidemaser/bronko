/**
 * Created by David Maser on 20/02/17.
 */
var ajax = $$b.ajax;
ajax.init=function(obj){
    /*
    pass object in the following format
    {url:'the_url',name:'unique name for dataset',key:'optional key for data',split:false}
     */
    if(typeof obj == 'object'){
        var type = obj.split == true ? 'packets' : 'data';
        $.ajax({
            url:config.settings.ajax.src.root+obj.url,
            method:config.settings.ajax.method,
            success:function(data){
                if(obj.name !== undefined){
                    store[obj.name] = {};
                    store[obj.name]['key'] = obj.key || undefined;
                    store[obj.name][type] = obj.key !== undefined ? data[obj.key] : data;
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