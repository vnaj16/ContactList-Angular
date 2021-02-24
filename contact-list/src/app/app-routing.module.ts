import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallContactComponent } from './contacts/call-contact/call-contact.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactFormComponent } from './contacts/contact-form/contact-form.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

const routes: Routes = [
  {path:'', component: ContactListComponent},
  {path:'contacts', component: ContactListComponent},
  {path:'contacts/add', component: ContactFormComponent},
  {path:'contacts/:id', component: ContactDetailComponent},
  {path:'contacts/:id/call', component: CallContactComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
