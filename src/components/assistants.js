/**
 * Created by David Maser on 20/02/17.
 */
export function replace(str,args){
    /*
    structure of the args object :
    [{in:'string',out:'string'},{in:'string',out:'string'}]
     */
    if(typeof args === 'object'){
       for(let a in args){
           str = str.replace(new RegExp(args[a].in, 'g'), args[a].out);
       }
    }else{
        throw new Error;
    }
}
export function date(string,type){
    let currentData = new Date(),
        formatDate = {};
    formatDate['day'] = currentData.getDate().toString().length === 1 ? parseInt('0' + currentData.getDate()) : currentData.getDate();
    formatDate['month'] = (currentData.getMonth() + 1).toString().length === 1 ? parseInt('0' + (currentData.getMonth() + 1)) : currentData.getMonth() + 1;
    formatDate['year'] = currentData.getFullYear();
    formatDate['hours'] = currentData.getHours();
    formatDate['minutes'] = currentData.getMinutes();
    formatDate['seconds'] = currentData.getSeconds();
    switch (type) {
        case 'date':
            return string === true ? formatDate['month'] + '/' + formatDate['day'] + '/' + formatDate['year'] : formatDate;
            break;
        case 'time':
            return string === true ? formatDate['hours'] + ':' + formatDate['minutes'] + ':' + formatDate['seconds'] : formatDate;
            break;
    }
}
export function dateStamp(){
    return Math.floor(Date.now() / 1000);
}
export function repeat(str,times){
    return new Array(times + 1).join(str);
}
export const object = {
    size:(obj)=> {
        let size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    }
};
