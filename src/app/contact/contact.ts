import { Component, signal } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { email, form, required, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, FormField, ReactiveFormsModule],

  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactDetails = signal({
    name: '',
    email: '',
    message: '',
  });

  enquiryForm: FormGroup;

  contactForm = form(this.contactDetails, (field) => {
    required(field.name);
    required(field.email);
    email(field.email);
    required(field.message);
  });

  constructor(private fb: FormBuilder) {
    this.enquiryForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
      address: this.fb.group({
        street: [''],
        city: [''],
        zip: ['']
      }),
      skills: this.fb.array([]),
    });
  }

  get skills() {
    return this.enquiryForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  submitForm() {
    console.log('Form submitted with values:', this.contactDetails());
  }

  enquirySubmit() {
    console.log('Enquiry submitted with values:', this.enquiryForm.value);
  }

  // contact = {
  //   name: '',
  //   email: '',
  //   message: '',
  // }

  // submitForm(formValues: { name: string; email: string; message: string }) {
  //   this.contact = { ...formValues };
  //   console.log('Form submitted with values:', this.contact);
  // }

  // submitForm() {
  //   console.log('Form submitted with values:', this.contact);
  // }
}
