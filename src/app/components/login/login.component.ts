import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder,FormControl} from '@angular/forms'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  type:string="password";
  isText:boolean=false;
  eyeIcon:string='fa-eye-slash'
  loginForm!:FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService,private route:Router){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  hideShowPass(){
       this.isText = !this.isText;
       this.isText? this.eyeIcon = "fa-eye" : this.eyeIcon="fa-eye-slash";
       this.isText? this.type = "text" : this.type="password";
   }
   onSubmit(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value)
      .subscribe(
        {
          next:(res)=>{
            alert(res.message)
            this.loginForm.reset();
            this.auth.storeToken(res.token);
            this.route.navigate(['drugs'])
          },
          error:(err)=>{alert(err.error.message)}

        }
      )
      console.log(this.loginForm.value)
    }


   //console.log(this.loginForm.value);

    else{
  console.log("Form is not valid")
   this.validateAllFormFields(this.loginForm);
   alert('Your form is invalid')
    }
   }

   private validateAllFormFields(formGroup: FormGroup){
    Object.keys(formGroup.controls).forEach(field =>{
     const control = formGroup.get(field);
     if(control instanceof FormControl){
      control.markAsDirty({onlySelf:true});
     } else if(control instanceof FormGroup){
      this.validateAllFormFields(control)
     }


    })




   }

   }

