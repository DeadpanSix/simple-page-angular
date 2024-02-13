import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Categories } from '../_models/categories'

@Component({
  selector: 'app-contact-support-form',
  standalone: true,
  imports: [],
  templateUrl:'./contact-support-form.component.html',
  styleUrl: './contact-support-form.component.sass'
})

export class ContactSupportFormComponent implements OnInit {
  form!: FormGroup

  constructor(
    // private formBuilder: FormBuilder
  ) { }

  categories: Categories  =
    // { id: 1, name: 'Informativo' },
    { id: 2, name: 'Reporte de problema' }
  
  fullName = new FormControl('', [Validators.required, this.customNameValidator])

  customNameValidator(control: FormControl): { [key: string]: any } | null {
    if (!control.value || control.value.length < 3) {
      return { fullName: 'minlength' }
    }
    // Add other custom validation logic here
    return null;
  }

  submitted = false

  ngOnInit() {
    // this.form = this.formBuilder.group({
    //     fullName: ['', Validators.required],
    //     businessName: ['', Validators.required]
    // });
  }

  onSubmit() { 
    this.submitted = true;
  }
}
