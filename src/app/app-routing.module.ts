import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPatientComponent } from './search-patient/search-patient.component';
import { ReportsComponent } from './reports/reports.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { MonthlyReportComponent } from './monthly-report/monthly-report.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'search', component: SearchPatientComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'details', component: PatientDetailsComponent },
  { path: 'monthly-report', component: MonthlyReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
