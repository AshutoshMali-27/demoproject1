import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { ControlContainer, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlcontainersComponent } from './Component/controlcontainers/controlcontainers.component';
import { CardsComponent } from './Component/cards/cards.component';
import { SavebtnComponent } from './Component/savebtn/savebtn.component';
import { ApplogoComponent } from './Component/applogo/applogo.component';
import { RouterModule } from '@angular/router';
import { PopoversComponent } from './popovers/popovers.component';
import { Card2Component } from './Component/card2/card2.component';
import { ModelpopupComponent } from './Component/modelpopup/modelpopup.component';
import { HideifemptyDirective } from './Directive/hideifempty.directive';



const COMMON_STANDALONE_COMP_LIST: any[] | Type<any> = [
  HeaderComponent,
  FooterComponent,
  ControlcontainersComponent,
  CardsComponent,
  SavebtnComponent,
  ApplogoComponent,
  PopoversComponent,
  Card2Component,
  ModelpopupComponent,
  HideifemptyDirective
  
];


@NgModule({
  declarations: [
// HeaderComponent,
// FooterComponent,
// ControlcontainersComponent,
// CardsComponent,
// SavebtnComponent,
// ApplogoComponent,
// PopoversComponent
COMMON_STANDALONE_COMP_LIST,
//SidebarItemComponent,

  ],
  imports: [
    
    CommonModule,
   FormsModule,
   ReactiveFormsModule,
   RouterModule,
   

  
  
 
  ],
  exports:[
    COMMON_STANDALONE_COMP_LIST


  ],
  providers: [],

})
export class SharedModule { }
