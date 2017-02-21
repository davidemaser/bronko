/**
 * Created by David Maser on 20/02/17.
 */
log.write = function(args){
    /*
    args format should be as follows
    {event:'string',result:'string',error:boolean,caller:'string'}
     */
    if(typeof args == 'object'){

    }else{
        alerts.create({type:'error',title:'Log Error',body:'Unable to write to the log. Expected an object',log:false,delay:5000});
    }
};