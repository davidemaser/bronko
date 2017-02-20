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
        var typeArray,d;
        if(type.indexOf('.')>-1){
            typeArray = type.split('.');
        }
        for(d in data){
            console.log(d,data[d])
        }
    }
    if(name !== undefined){
        if(store[name] !== undefined){
            if(store[name].key !== undefined){
                iterateData(parseWithKey(name,store[name].key)[0]);
            }
        }
    }
}