/**
 * Created by David Maser on 20/02/17.
 */
var config = $$b.config;
config.settings = {
    ajax:{
        method:'get',
        accepts:'JSON',
        src:{
            root:'data/',
            extension:'.json'
        }
    },
    dom:{
        parent:'html',
        root:'body'
    },
    app:{
        name:'your name',
        ip:''
    }
};