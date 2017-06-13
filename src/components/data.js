/**
 * Created by David Maser on 20/02/17.
 */
import * as template from './template';
let store = {
  bronko: {
    version: '1.0.0',
    accepts: 'json',
    format: 'brut'
  }
};
export function capture(name,packets) {
    function captureWithKey(name,type) {
        /*
        type lets you define if you want to capture packets
        or the root data object. See data.split function
         */
        return store[name][type] !== undefined ? store[name][type] : false;
    }

    function iterateData(data) {
        let type = data['type'];
        type.indexOf('.') > -1 ? template.build(type.split('.'), data) : template.build(type, data);
    }

    let rootKey = packets === true ? 'packets' : 'data';
    if (name !== undefined) {
        if (store[name] !== undefined) {
            let dataOBJ = captureWithKey(name,rootKey);
            if (typeof dataOBJ === 'object') {
                for (let d in dataOBJ) {
                    if(typeof dataOBJ[d] === 'object'){
                        let obj = dataOBJ[d];
                        for(let o in obj){
                            iterateData(obj[o]);
                        }
                    }else{
                        iterateData(dataOBJ[d]);
                    }
                }
            }
        }
    }
}
export function split(name,qty){
    /*
    function splits an existing dataset into packets
    that can be paginated and called by their index
    Packets are saved in the bronko data.store object
    as a new object called 'packets'. Each packet will
    contain an array of objects containing the number
    of data entries you define
     */
    if(store[name] !== undefined && store[name].data !== undefined && typeof store[name] === 'object'){
        let data = store[name].data;
        store[name].packets = {};
        let i,j,array;
        for (i=0,j=data.length; i<j; i+=qty) {
            array = data.slice(i,i+qty);
            store[name].packets[i] = array;
        }
    }
}
export function index(){
    let nodes = 0;
    let nodeArray = [];
    if(typeof store === 'object'){
        //store exists let's see what's in it
        for(let s in store){
            if(store.hasOwnProperty(s) && s !== 'bronko' && s !== 'index'){
                //the bronko object doesn't count
                nodeArray.push(s);
                nodes ++;
            }
        }
        console.log(nodes+' data nodes found');
        store['index'] = nodeArray;
        return store.index;
    }
}