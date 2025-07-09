import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-login-registration',
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent],
  templateUrl: './login-registration.component.html',
  styleUrl: './login-registration.component.scss',
})
export class LoginRegistrationComponent {
  authForm: FormGroup;
  isLoginMode: boolean = true; // перемикач режиму

  constructor(private fb: FormBuilder) {
    this.authForm = this.createForm();
  }

  ngOnInit(): void {
    console.log('LoginRegistrationComponent initialized');
  }

  createForm(): FormGroup {
    return this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // Поле, яке буде використовуватись тільки в реєстрації
      username: [''],
    });
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.authForm.reset();
  }

  onSubmit(): void {
    if (this.authForm.invalid) return;

    const { email, password, username } = this.authForm.value;

    if (this.isLoginMode) {
      // Логін
      console.log('Login:', { email, password });
      // this.authService.login(email, password)...
    } else {
      // Реєстрація
      console.log('Register:', { username, email, password });
      // this.authService.register(username, email, password)...
    }
  }
}
