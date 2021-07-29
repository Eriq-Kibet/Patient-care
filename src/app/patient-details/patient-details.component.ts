import { PatientDetailsService } from './../services/patient-details.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  patientInfo: any;
  patientDetails: any;
  constructor(private patientDetailsService: PatientDetailsService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      let name = params['name'];
      console.log(name);
      this.patientInfo = name;
    })
    this.getPatientInformation();
  }
  public getPatientInformation() {
    this.patientDetailsService.sendPatientDetails(this.patientInfo).subscribe((results) => {
      console.log(results);
      this.patientDetails = results;

    },

    )
  }
}
