import './node_modules/reflect-metadata/Reflect.js';
import './node_modules/zone/lib/zone.js';
import 'es6-shim';
import { Component, View, bootstrap } from './node_modules/angular2/angular2';
import { bind, FORM_BINDINGS } from 'angular2/angular2';
import { ROUTER_BINDINGS, LocationStrategy, HashLocationStrategy } from 'angular2/router';
import { HTTP_BINDINGS } from 'angular2/http';
import { AppComponent } from './components/App';
// import './node_modules/angular/angular.min';
// import angular from './node_modules/angular2/angular2'
// import {AsModule, Component, Service, View, bootstrap	} from './node_modules/a1atscript/dist/a1atscript.bundle';

// @AsModule('testapp', [])

@Component({
  selector: 'my-app'
})
@View({
  template: `<h1>Hello {{ name }}
  			test</h1>`
})
class MyAppComponent {
  constructor() {
    this.name = 'Thote adbc 123';
  }
}


bootstrap(AppComponent, [
    ROUTER_BINDINGS,
    FORM_BINDINGS,
    HTTP_BINDINGS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
    success => console.log('AppComponent bootstrapped!'),
    error => console.log(error)
);