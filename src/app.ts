import {Router, RouterConfiguration} from 'aurelia-router';
import {inject, PLATFORM} from 'aurelia-framework';
import {WebAPI} from './web-api';
import {HttpClient} from 'aurelia-http-client';
import MyReactComponent from './components/MyReactComponent.jsx';

  @inject(WebAPI, HttpClient)
  export class App {
    router: Router;
  
    constructor(public api: WebAPI, public httpClient: HttpClient) {}
  
    configureRouter(config: RouterConfiguration, router: Router) {
      config.title = 'Contacts';
      config.options.pushState = true;
      config.options.root = '/';
      config.map([
        { route: '',              moduleId: PLATFORM.moduleName('no-selection'),   title: 'Select'},
        { route: 'contacts/:id',  moduleId: PLATFORM.moduleName('contact-detail'), name:'contacts' }
      ]);
  
      this.router = router;
    }

    created(){
      console.log("Created");
     this.getCallExp();
    }
    getCallExp() {
      this.httpClient.get('https://reqres.in/api/users?page=2')
      .then(response => {
        console.log("ApiCall: ",response.content)
        this.users =  response.content.data;
      });
    }
    users = []
    MyReactComponent = MyReactComponent;
    msg = "Welcome to Aurelia: Message from Aurelia -> React";

  }