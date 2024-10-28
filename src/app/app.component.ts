import { NgClass } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Injector } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseComponent } from './shared/Ui-Component/BaseComponent';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent extends BaseComponent {
  title = 'demo_project_frontend';

  constructor(injector:Injector){
    super(injector);
   // initFlowbite()
  }

  ngOnInit(): void {
  
    this,this.LoadingService.isLoading$.subscribe((isLoading)=>{

      this.isLoading=isLoading;
    });
    
  }
  
}
