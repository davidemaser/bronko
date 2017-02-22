/**
 * Created by David Maser on 21/02/17.
 */
paginate.build = build = {
    model:function(name,packets,number){
        try {
            var maxDisplay = number;
            var dataSet = packets == true ? store[name]['packets'] : store[name]['data'];
            var objectSize = assistants.object.size(dataSet);
            var items = Math.round(objectSize / number);
            for (var i = 0; i < maxDisplay; i++) {
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
paginate.navigate = navigate = {};