import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { CallContactComponent } from './call-contact/call-contact.component';




@NgModule({
  declarations: [ContactListComponent, ContactFormComponent, ContactDetailComponent, CallContactComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ContactListComponent, ContactFormComponent, ContactDetailComponent, CallContactComponent 
  ]
})
export class ContactsModule { }
