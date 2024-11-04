import { Component, Injector } from '@angular/core';
import { BaseComponent } from '../../../shared/Ui-Component/BaseComponent';
import { AuthenticationService } from '../../../shared/Services/authentication.service';
import { UntypedFormGroup } from '@angular/forms';
import { Login } from '../../../shared/Models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends BaseComponent {

  form:UntypedFormGroup;
  login:Login
  isLogging=false;

  constructor(injector:Injector,private service:AuthenticationService){
    super(injector);
  }
  ngOnInit(): void {
    debugger;
    this.form=Login.getForm(new Login(this.login));
    
  }
  onlogin(){
    debugger;
    this.LoadingService.setLoading(true);
    if(this.form.valid){
      this.isLogging=true;
      const username = this.form.value.username;
    const password = this.form.value.password;
    console.log('Login attempted with:', { username, password });
    // this.router.navigate(['home']);
      this.service.login(this.form.value).subscribe({
        next:Response=>{
          this.notify("Login successfully!");
          console.log("Login Response:", Response); 
        this.service.setUserSession(Response.user,Response.token);
          
       
          // this.notify(`login Successful ! ${Response?.success?.text}`,this.NOTIFICATION_Types.SUCCESS);
         // this.notify(`Login Successful! ${Response?.success?.text ?? "Operation completed successfully."}`, this.NOTIFICATION_Types.SUCCESS);
         
        },
        error:errorResponse=>{
          debugger;
          console.error("Error Logging in:", errorResponse);
          console.log("Error Logging in", errorResponse?.error?.text);
         this.notify(`login Failed ! ${errorResponse?.error?.text}`,this.NOTIFICATION_Types.ERROR);
        }
      }).add(()=>{
        this.isLogging=false;
        this.LoadingService.setLoading(false);
      });
    }
    else{
      this.ValidateFormFields(this.form);
    }

  }
}
