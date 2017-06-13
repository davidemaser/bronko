/**
 * Created by David Maser on 20/02/17.
 */
import * as config from './src/components/config';
import * as alerts from './src/components/alerts';
import * as log from './src/components/log';
import * as data from './src/components/data';
import * as app from './src/components/app';
import * as paginate from './src/components/paginate';
import * as assistants from './src/components/assistants';
import * as ajax from './src/components/ajax';
import * as template from './src/components/template';

$(function(){
  let bronko = {};
  bronko.config = config;
  bronko.alerts = alerts;
  bronko.log = log;
  bronko.data = data;
  bronko.app = app;
  bronko.paginate = paginate;
  bronko.assistants = assistants;
  bronko.ajax = ajax;
  bronko.template = template;
    app.init.data();
});