import {EventAggregator} from 'aurelia-event-aggregator';
  import {WebAPI} from './web-api';
  import {ContactUpdated, ContactViewed} from './messages';
  import {inject} from 'aurelia-framework';
  
  @inject(WebAPI, EventAggregator)
  export class ContactList {
    contacts;
    selectedId = 0;

    constructor(private api: WebAPI, public ea: EventAggregator) {
        ea.subscribe(ContactUpdated, msg => {
            let id = msg.contact.id;
            let found = this.contacts.find(x => x.id == id);
            Object.assign(found, msg.contact);
        });
        ea.subscribe(ContactViewed, msg => {
          this.select(msg.contact)
      });
    }
  
    created() {
      this.api.getContactList().then(contacts => this.contacts = contacts);
    }
  
    select(contact) {
      this.selectedId = contact.id;
      return true;
    }
    handleContactClick(contact) {
        const subscription = this.ea.subscribe(ContactViewed, msg => {
          this.select(msg.contact);
          subscription.dispose(); 
        });
      }
  }