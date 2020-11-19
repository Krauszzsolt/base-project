import { Component, OnInit } from '@angular/core';
import { LoginDto } from 'src/app/shared/client/model/models';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  loginDto: LoginDto = { username: 'test@test.test', password: '123456' };

  errorMessage: string = undefined;

  ngOnInit() {}

  login() {
    this.authService.login(this.loginDto).subscribe(   (resp) => {
        console.log(resp)
      },
      (error) => { console.log(error) , this.errorMessage = error.message}
      );
  }
}
