import { Component, OnInit } from '@angular/core';
import { PatientDetailsService } from '../services/patient-details.service';
import { PatientSearchService } from '../services/search-patient.service'
@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.scss']
})
export class SearchPatientComponent implements OnInit {
  searchValue: string = "";
  patients: any;
  numberOfPatients: number = this.searchValue.length;

  constructor(private patientSearchService: PatientSearchService) { }

  ngOnInit(): void {


  }

  public getPatient() {
    if (this.searchValue.trim().length > 2)
      this.patientSearchService.sendSearchPatient(this.searchValue).subscribe((results) => {
        console.log(results);
        this.patients = results;

      },

      )
  }
}

