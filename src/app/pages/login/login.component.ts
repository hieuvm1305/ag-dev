import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators, FormGroup} from '@angular/forms';
import { GlobalModules } from '../../global.module';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [...GlobalModules],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }
  ngOnInit(): void {
    console.log('cds')
  }
  constructor(private fb: NonNullableFormBuilder) {
    this.validateForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
    });
  }
}