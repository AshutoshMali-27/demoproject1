import { Injector } from "@angular/core";
import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "../Services/authentication.service";
import { LoaderService } from "../Services/loader.service";
import { ActiveToast, ToastrService } from "ngx-toastr";

export abstract class BaseComponent{

    //isMobileDevoce=window.innerWidth<760;
    router:Router;
    isLoading=false;
    isLoggedIn=false;
    isSidebarCollapsed=false;
    activateRouter:ActivatedRoute;
    userPermissionList:string|any[]=null;
    fb:UntypedFormBuilder;
    authservice: AuthenticationService;
    LoadingService:LoaderService;
	notifyService: ToastrService;

    NOTIFICATION_Types={
        INFO:"info",
        ERROR:"error",
        WARNING:"warning",
        SUCCESS:"success",
    };


    constructor(injector:Injector){


        this.router=injector.get(Router);
        this.authservice=injector.get(AuthenticationService);
        this.activateRouter=injector.get(ActivatedRoute);
        this.LoadingService=injector.get(LoaderService);
        this.fb=injector.get(UntypedFormBuilder);
        // this.authservice.authStatus.subscribe((isLoggedIn)=>{
        //     this.isLoggedIn=isLoggedIn;
        // });
     
       
    }

    ValidateFormFields(form:UntypedFormGroup |UntypedFormArray):void{
        Object.keys(form.controls).forEach(field=>{
            const control=form.get(field);
            if(control instanceof UntypedFormControl){
                control.markAsTouched();
				control.updateValueAndValidity(); 
            }
            else if (control instanceof UntypedFormGroup) {
				this.ValidateFormFields(control);
			}
            else if(control instanceof UntypedFormArray){
                Object.keys(control.controls).forEach(index=>{
                    if(control instanceof UntypedFormControl){
                        control.markAsTouched();
                        control.updateValueAndValidity();
                    }else{
                        this.ValidateFormFields(control.get(index) as UntypedFormGroup);
                    }
                })
            }
        })
    }

    
    notify(message: string, type = this.NOTIFICATION_Types.SUCCESS, title = "", override = {}): ActiveToast<any> {
		switch (type) {
			default:
				return this.notifyService.success(message, title ?? "Success", override);
			case this.NOTIFICATION_Types.ERROR:
				return this.notifyService.error(message, title ??  "Error", override);
			case this.NOTIFICATION_Types.INFO:
				return this.notifyService.info(message, title ?? "Info", override);
			case this.NOTIFICATION_Types.WARNING:
				return this.notifyService.warning(message, title ?? "Warning", override);
		}
	}

    toggleSidebar(){
		console.log("testing", this.isSidebarCollapsed);
		this.isSidebarCollapsed = !this.isSidebarCollapsed;
	}

    logout(): void {
		this.authservice
			.logout()
			.subscribe()
			.add(() => {
				this.authservice.clearUserSession();
				setTimeout(() => {
					this.router.navigate(["/"]);
				}, 10);
			});
	}
}