/**
 * Created by David Maser on 20/02/17.
 */
assistants.replace = function(str,args){
    /*
    structure of the args object :
    [{in:'string',out:'string'},{in:'string',out:'string'}]
     */
    if(typeof args == 'object'){
       for(var a in args){
           str = str.replace(new RegExp(args[a].in, 'g'), args[a].out);
       }
    }else{
        throw new Error;
    }
};
assistants.date = function(string,type){
    var currentData = new Date(),
        formatDate = {};
    formatDate['day'] = currentData.getDate().toString().length == 1 ? parseInt('0' + currentData.getDate()) : currentData.getDate();
    formatDate['month'] = (currentData.getMonth() + 1).toString().length == 1 ? parseInt('0' + (currentData.getMonth() + 1)) : currentData.getMonth() + 1;
    formatDate['year'] = currentData.getFullYear();
    formatDate['hours'] = currentData.getHours();
    formatDate['minutes'] = currentData.getMinutes();
    formatDate['seconds'] = currentData.getSeconds();
    switch (type) {
        case 'date':
            return string == true ? formatDate['month'] + '/' + formatDate['day'] + '/' + formatDate['year'] : formatDate;
            break;
        case 'time':
            return string == true ? formatDate['hours'] + ':' + formatDate['minutes'] + ':' + formatDate['seconds'] : formatDate;
            break;
    }
};
assistants.dateStamp = function(){
    return Math.floor(Date.now() / 1000);
};
assistants.repeat = function(str,times){
    return new Array(times + 1).join(str);
};