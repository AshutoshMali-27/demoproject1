import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanctionorderentryComponent } from './sanctionorderentry/sanctionorderentry.component';
import { SanctionorderinboxComponent } from './sanctionorderinbox/sanctionorderinbox.component';
import { SanctionorderoutboxComponent } from './sanctionorderoutbox/sanctionorderoutbox.component';

const routes: Routes = [
  { path: '', redirectTo: 'sanction-order-entry', pathMatch: 'full' }, // Redirect on load
  { path: 'sanction-order-entry', component: SanctionorderentryComponent },
  { path: 'sanction-order-inbox', component: SanctionorderinboxComponent },
  { path: 'sanction-order-outbox', component: SanctionorderoutboxComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SanctionorderRoutingModule { }