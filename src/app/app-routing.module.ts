import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { ReportsComponent } from './reports/reports.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'search', component: SearchPatientComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'details', component: PatientDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
