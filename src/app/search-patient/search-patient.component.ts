import { Component, OnInit } from '@angular/core';
import { PatientSearchService } from '../services/search-patient.service'
import { debounce } from 'lodash';
@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.scss']
})
export class SearchPatientComponent implements OnInit {
  searchValue: string = "";
  patients: any;
  numberOfPatients: number = this.searchValue.length;

  constructor(private patientSearchService: PatientSearchService) { this.getPatient = debounce(this.getPatient, 3000) }

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

