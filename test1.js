import 'zone.js/lib/browser/zone-microtask';
import 'reflect-metadata';
import 'babel-core/polyfill';

import {
  Component, View, Attribute,
  provide,
  bootstrap
} from 'angular2/angular2';

import {
  Router, RouteConfig, RouteParams,
  LocationStrategy, HashLocationStrategy,
  ROUTER_PROVIDERS, ROUTER_DIRECTIVES, ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';

import React  from 'react';
import ReactDOM  from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import { Greeter } from './services';
import { ReactThongchai }  from './thongchai';
import { Test } from './test';
import Abc from './abc';

var ReactTest = React.createClass({
  render: function() {
    return (
      <div className="ReactTest">React create Class={this.props.name}</div>
    );
  }
});

@Component({
  selector: 'hello'
})

@View({
  template: `<div>
                <p> {{ message }}</p><br>
                <h1>test {{serverstring}}</h1><br> 
                <div id="react-thongchai" />
            </div>
            <div>
                  <div id="reeacttest" />
            </div>
            <div>
                   <div id="reeactabc" />
            </div>`
})


class Hello {
  constructor(greeter: Greeter) {
      this.message = greeter.say('hello', 'Angular 2');
      ReactDOM.render(<ReactThongchai name="xyz" />,document.getElementById('react-thongchai'));
      ReactDOM.render(<Test name="title" />, document.getElementById('reeacttest'));
      ReactDOM.render(<Abc name="abc" />, document.getElementById('reeactabc'));
      this.serverstring = ReactDOMServer.renderToString(<Abc name='server'/>);
  }
}

@Component({
  selector: 'ciao'
})
@View({
  template: '<div><p>{{ message }}</p><br><div id="reeacttest" /></div><div><div id="reacttest"/></div>'
})
class Ciao {
  constructor(greeter: Greeter, routeParams: RouteParams) {
    this.message = greeter.say('ciao', routeParams.get('name'));
    ReactDOM.render(<Test name="title" />, document.getElementById('reeacttest'));
    ReactDOM.render(<ReactTest name="title" />, document.getElementById('reacttest'));
  }
}

@Component({
  selector: 'linker'
})
@View({
  template: '<p><a [href]="url" [title]="name">{{ name }}</a></p>'
})
class Linker {
  constructor(greeter: Greeter, @Attribute('name') name, @Attribute('url') url) {
    this.name = name;
    this.url = url;
  }
}

@Component({
  selector: 'my-app',
  viewProviders: [Greeter]
})
@View({
  directives: [ROUTER_DIRECTIVES, Linker],
  template: `
    <ul>
      <li><a [router-link]="['/Hello']">Hello</a></li>
      <li><a [router-link]="['/Ciao', { name: 'ng2' }]">Ciao</a></li>
    </ul>
    <router-outlet></router-outlet>
    <linker name="GitHub" url="https://github.com/shuhei/babel-angular2-app"></linker>
  `
})

@RouteConfig([
  { path: '/', component: Hello, as: 'Hello' },
  { path: '/ciao/:name', component: Ciao, as: 'Ciao' }
])


class HelloApp {
}

bootstrap(HelloApp, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  // https://github.com/angular/angular/issues/4318
  provide(ROUTER_PRIMARY_COMPONENT, { useValue: HelloApp })
]);
