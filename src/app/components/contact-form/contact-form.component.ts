import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, Validators,FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message : new FormControl('',[])
  });

  onSubmit() {
    if (this.contactForm.valid) {
      const contactData = this.contactForm.value;
      this.saveToLocalStorage(contactData);
      alert('Form submitted successfully!');
      this.contactForm.reset();
    }
  }

  saveToLocalStorage(data: any) {
    let contactList = localStorage.getItem('contactList');
    let contacts = contactList ? JSON.parse(contactList) : [];
    contacts.push(data);
    localStorage.setItem('contactList', JSON.stringify(contacts));
  }
}