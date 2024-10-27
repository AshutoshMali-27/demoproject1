import { UntypedFormArray, UntypedFormBuilder, Validators } from "@angular/forms";

export class Login{
    username:string;
    password:string;

constructor(paramObject:object){
    return Object.assign(this,paramObject)
}

static getForm(login:Login){
    return new UntypedFormBuilder().group({
        username:[login.password || null,[Validators.required]],
        password:[login.password || null,[Validators.required]]
    });
}

}