import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
onSignIn() {
throw new Error('Method not implemented.');
}
toggleForm() {
throw new Error('Method not implemented.');
}
loginObj:any ={
  email:'',
  password: ''
};

router = inject(Router)

onLogin(){
  if(this.loginObj.email == 'admin@gmail.com' && this.loginObj.password == "112233"){

    // Save login session first
    localStorage.setItem('empErpUser', JSON.stringify(this.loginObj));

    // Then navigate
    this.router.navigateByUrl('/client');

  } else {
    alert("Wrong Credentials");
  }
}

}
