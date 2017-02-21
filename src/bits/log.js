/**
 * Created by David Maser on 20/02/17.
 */
log.entries = {};
log.write = function(args){
    /*
    args format should be as follows
    {event:'string',result:'string',error:boolean,caller:'string',stamp:'string'}
     */
    if(typeof args == 'object'){
        //log.entries[args.stamp] = {};
        log.entries[args.stamp] = args;
        console.log(args);
    }else{
        alerts.create({type:'error',title:'Log Error',body:'Unable to write to the log. Expected an object',caller:'log.write',log:false,delay:5000,speed:300});
    }
};