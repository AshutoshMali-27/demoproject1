import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'auth',
        loadChildren:()=>import("./Modules/auth/auth.module").then(m=>m.AuthModule),
        title:"DemoProject"
      },
      {
        path: "",
        redirectTo: 'auth/login',
        pathMatch: 'full'
      }
];
