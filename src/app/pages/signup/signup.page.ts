import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthConstants } from './../../config/auth-constants';
import { AuthService } from './../../services/auth.service';
import { StorageService } from './../../services/storage.service';
import { ToastService } from './../../services/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss']
})
export class SignupPage implements OnInit {
  postData = {
    first_name: '',
    last_name: '',
    date_of_birth: '',
    phone_number: '',
    gender: '',
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private storageService: StorageService,
    private router: Router
  ) {}

  ngOnInit() {}

  validateInputs() {
    let first_name = this.postData.first_name.trim();
    let last_name = this.postData.last_name.trim();
    let phone_number = this.postData.phone_number.trim();
    let gender = this.postData.gender.trim();
    let date_of_birth = this.postData.date_of_birth.trim();
    let password = this.postData.password.trim();
    let email = this.postData.email.trim();
   
    return (

      this.postData.first_name &&
      this.postData.last_name &&
      this.postData.phone_number &&
      this.postData.gender &&
      this.postData.date_of_birth &&
      this.postData.password &&
      this.postData.email &&
      email.length > 0 &&
      first_name.length > 0 &&
      email.length > 0 &&
      last_name.length > 0 &&
      phone_number.length > 0 &&
      gender.length > 0 &&
      date_of_birth.length > 0 &&
      password.length > 0
    );
  }

  signupAction() {
    if (this.validateInputs()) {
      this.authService.signup(this.postData).subscribe(
        (res: any) => {
          if (res.data) {
            // Storing the User data.
            this.storageService
              .store(AuthConstants.AUTH, res.data)
              .then(res => {
                this.router.navigate(['home']);
              });
          } else {
            this.toastService.presentToast(
              'Data alreay exists, please enter new details.'
            );
          }
        },
        (error: any) => {
          this.toastService.presentToast('Network Issue.');
        }
      );
    } else {
      this.toastService.presentToast(
        'Please enter  first name, last name, gender,date of birth,email, username or password.'
      );
    }
  }
}
