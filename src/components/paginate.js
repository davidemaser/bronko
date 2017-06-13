/**
 * Created by David Maser on 21/02/17.
 */
import * as assistants from './assistants';
export let build = {
    model:function(name,packets,number){
        try {
            let maxDisplay = number;
            let dataSet = packets === true ? store[name]['packets'] : store[name]['data'];
            let objectSize = assistants.object.size(dataSet);
            let items = Math.round(objectSize / number);
            for (let i = 0; i < maxDisplay; i++) {
                dataSet[i] !== undefined ? console.log(dataSet[i]) : '';
            }
        }catch(e){

        }
    },
    index:function(){

    },
    schema:function(){

    }
};
export const navigate = {};