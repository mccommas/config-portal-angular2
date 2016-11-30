import { Component, OnInit } from '@angular/core';
import { ProgramEditService } from './program-edit.service';
import { HttpService } from './../../../shared/services/http.service';
import { ConstantService } from './../../../shared/services/constant.service';
import { DefinitionsService } from './../../../shared/services/definitions.service';
import { ToasterService } from 'angular2-toaster/angular2-toaster'

@Component({
  selector: 'app-program-edit',
  templateUrl: './program-edit.component.html',
  styleUrls: ['./program-edit.component.less'],
  providers: [ProgramEditService, HttpService, ConstantService, DefinitionsService]
})
export class ProgramEditComponent implements OnInit {

  public programDetails: any;
  public headerData: any;
  public statesList: any[];
  public startTerms: any[];

  constructor(private programEditService: ProgramEditService, private definitionsService: DefinitionsService, private toasterService: ToasterService) { }

  ngOnInit() {
    this.loadFormDependency();
  }
  public loadFormDependency(): void {
    this.getStatesData();
    this.startTerms = this.definitionsService.programStartTerms;
    this.getHeaderData();
  }

  public getProgramsList(): void {
    this.programEditService.getProgramData().map(r => r.json())
      .subscribe(data => {
        if (data) {
          this.programDetails = data;
        } else {
        }
      });
  }

  public getStatesData(): void {
    this.programEditService.getStatesData().map(r => r.json())
      .subscribe(data => {
        if (data) {
          this.statesList = data;
        } else {
        }
      });
  }

  public getHeaderData(): void {
    this.programEditService.getHeaderData().map(r => r.json())
      .subscribe(data => {
        if (data) {
          this.headerData = data;
          this.getProgramsList();
        } else {
        }
      });
  }

  save(model, isValid) {
    // check if model is valid
    // if valid, call API to save customer
    console.log(model, isValid);
    this.toasterService.pop('success', 'Program saved successfully.');
  }

}
