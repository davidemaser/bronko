/**
 * Created by David Maser on 20/02/17.
 */
app.schema = {
    entry:{
        fn:['ajax.init','args.split','build.model']
    },
    exit:{

    }
};
app.init = {
    data:function(args,units){
        /*
        args format is the same as for the ajax.init object
        {url:'bronko.json',name:'root',key:'structure',split:false}
         */
        $.when(ajax.init(args)).then(function(){
            args.split == true ? data.split(args.name,units) : false;
        }).then(function(){
            build.model(args.name,args.split,units);
        }).done(function(){
            var storeNode = args.split == true ? 'store.'+args.name+'.packets':'store.'+args.name+'.data';
            console.log('App initialized. Data stored in '+storeNode);
        })

    }
};