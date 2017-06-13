/**
 * Created by David Maser on 20/02/17.
 */
import * as config from './config';
export function init(obj){
    /*
    pass object in the following format
    {url:'the_url',name:'unique name for dataset',key:'optional key for data',split:false}
    if you add the split parameter to the object, the data will be saved into the
    packets object. IT WILL NOT however be split into usable packet sizes. To do so
    use the data.split function after the data has been loaded
     */
    if(typeof obj === 'object'){
        let type = obj.split === true ? 'packets' : 'data';
        $.ajax({
            url:config.settings.ajax.src.root+obj.url,
            method:config.settings.ajax.method,
            success:(data)=>{
                if(obj.name !== undefined){
                    store[obj.name] = {};
                    store[obj.name]['key'] = obj.key || undefined;
                    store[obj.name][type] = obj.key !== undefined ? data[obj.key] : data;
                }
            },
            error:()=>{
                alerts.create({
                    type:'error',
                    title:'AJAX Error',
                    body:'Unable to recover data from the server. The AJAX call failed',
                    caller:'ajax.init',
                    log:true,
                    delay:5000,
                    speed:300
                })
            }
        })
    }

};
export function parselet(){

};
export function objectifylet(){

};