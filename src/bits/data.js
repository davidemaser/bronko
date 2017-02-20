/**
 * Created by David Maser on 20/02/17.
 */
var data = $$b.data;
data.store = store = {
    bronko: {
        version: '1.0.0',
        accepts: 'json',
        format: 'brut'
    }
};
data.capture = function(name){
    function parseWithKey(name,key){
        return store[name].data[key];
    }
    function iterateData(data){
        var accepts = ['attributes','class','content','id','parent','type'];
        var type = data['type'];
        var d;
        type.indexOf('.') > -1 ? template.build(type.split('.'),data) : template.build(type,data);
    }
    if(name !== undefined){
        if(store[name] !== undefined){
            if(store[name].key !== undefined){
                var dataOBJ = parseWithKey(name,store[name].key);
                if(typeof dataOBJ == 'object'){
                    for(var d in dataOBJ){
                        iterateData(dataOBJ[d]);
                    }
                }
            }
        }
    }
};