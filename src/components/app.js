/**
 * Created by David Maser on 20/02/17.
 */
import * as ajax from './ajax';
import * as data from './data';
import * as alerts from './alerts';
export {build} from './paginate';
let schema = {
    entry:{
        fn:['ajax.init','args.split','build.model']
    },
    exit:{

    }
};
export const init = {
    data:(args,units)=>{
        try {
            /*
             args format is the same as for the ajax.init object
             {url:'bronko.json',name:'root',key:'structure',split:false}
             */
          $.when(ajax.init(args)).then(function () {
            args.split === true ? data.split(args.name, units) : false;
          }).then(function () {
            build.model(args.name, args.split, units);
          }).done(function () {
            let storeNode = args.split === true ? 'store.' + args.name + '.packets' : 'store.' + args.name + '.data';
            console.log('App initialized. Data stored in ' + storeNode);
          })
        }catch(e){
          alerts.create({
            type:'error',
            title:'INIT Error',
            body:'Unable to Initialize the app',
            caller:'app.init.data',
            log:true,
            delay:5000,
            speed:300
          })
        }

    }
};