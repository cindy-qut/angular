import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public connexionFailed: boolean;
  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username : ['', Validators.required ],
      password : ['', Validators.required ]
    });
  }
  login() {
    this.connexionFailed = false;
    const val = this.loginForm.value;
    if (val.username && val.password) {
     this.auth.login(val.username, val.password)
     .subscribe(
       () => {
         console.log('CONNECTED');
       },
       (err) => {
          console.error(err);
          this.connexionFailed = true;
        });
    }
  }
}
