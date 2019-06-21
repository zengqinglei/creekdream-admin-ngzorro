import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/user/account/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private accountService: AccountService
  ) {
    if (authService.currentUserValue) {
      router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  handleSubmit() {
    for (const key of Object.keys(this.loginForm.controls)) {
      this.loginForm.controls[key].markAsDirty();
      this.loginForm.controls[key].updateValueAndValidity();
    }
    const formData = this.loginForm.value;
    this.authService.login(formData.userName, '');
    this.router.navigate([this.returnUrl]);
    // this.accountService
    //   .login(formData.userName, formData.password)
    //   .subscribe(userInfo => {
    //     this.authService.login(userInfo.userName, '');
    //     this.router.navigate([this.returnUrl]);
    //   });
  }
}
