import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { ReportsComponent } from './reports/reports.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'search', component: SearchPatientComponent },
  { path: 'reports', component: ReportsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
