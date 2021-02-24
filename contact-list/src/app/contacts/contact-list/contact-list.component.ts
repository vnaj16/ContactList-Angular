import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactsService } from 'src/app/services/contacts.service';
 

@Component({
  selector: 'cl-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(public contactsService: ContactsService) { }

  ngOnInit(): void {
      this.contactsService.getAll()
      .subscribe(contacts=> {this.contacts = contacts});
  }

}


