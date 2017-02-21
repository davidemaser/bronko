/**
 * Created by David Maser on 20/02/17.
 */
data.capture = function (name,packets) {
    function captureWithKey(name,type) {
        /*
        type lets you define if you want to capture packets
        or the root data object. See data.split function
         */
        return store[name][type] !== undefined ? store[name][type] : false;
    }

    function iterateData(data) {
        var type = data['type'];
        type.indexOf('.') > -1 ? template.build(type.split('.'), data) : template.build(type, data);
    }

    var rootKey = packets == true ? 'packets' : 'data';
    if (name !== undefined) {
        if (store[name] !== undefined) {
            var dataOBJ = captureWithKey(name,rootKey);
            if (typeof dataOBJ == 'object') {
                for (var d in dataOBJ) {
                    iterateData(dataOBJ[d]);
                }
            }
        }
    }
};
data.split = function(name,qty){
    /*
    function splits an existing dataset into packets
    that can be paginated and called by their index
    Packets are saved in the bronko data.store object
    as a new object called 'packets'. Each packet will
    contain an array of objects containing the number
    of data entries you define
     */
    if(store[name] !== undefined && store[name].data !== undefined && typeof store[name] == 'object'){
        var data = store[name].data;
        store[name].packets = {};
        var i,j,array;
        for (i=0,j=data.length; i<j; i+=qty) {
            array = data.slice(i,i+qty);
            store[name].packets[i] = array;
        }
    }
};
data.index = function(){
    var nodes = 0;
    var nodeArray = [];
    if(typeof store == 'object'){
        //store exists let's see what's in it
        for(var s in store){
            if(store.hasOwnProperty(s) && s !== 'bronko' && s !== 'index'){
                //the bronko object doesn't count
                nodeArray.push(s);
                nodes ++;
            }
        }
        console.log(nodes+' data nodes found');
        store['index'] = nodeArray;
    }
};