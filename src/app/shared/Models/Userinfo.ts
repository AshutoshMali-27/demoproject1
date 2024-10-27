import { UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from "@angular/forms";
export class Userinfo{
    username: string;
    password:string;


    constructor(paramObject:object){
        return Object.assign(this,paramObject);
    }


    
    static getForm(Userinfo: Userinfo): UntypedFormGroup{

        return new UntypedFormBuilder().group({
            name:[Userinfo.username || null,[Validators.required]],
            email:[Userinfo.password || null ,[Validators.required]],
        

        })
    }

}