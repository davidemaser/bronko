/**
 * Created by David Maser on 21/02/17.
 */
paginate.build = build = {
    model:function(name,packets,number){
        var maxDisplay = number;
        var dataSet = packets == true ? store[name]['packets'] : store[name]['data'];
        var objectSize = assistants.object.size(dataSet);
        console.log(dataSet,assistants.object.size(dataSet));
        for(var i = 0;i < maxDisplay;i++){
            dataSet[i] !== undefined ? console.log('thos',dataSet[i]) : '';
        }
    },
    index:function(){

    },
    schema:function(){

    }
};
paginate.navigate = navigate = {};