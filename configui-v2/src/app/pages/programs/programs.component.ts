import { Component, OnInit } from '@angular/core';
import { ProgramsService } from './programs.service';
import { HttpService } from './../../shared/services/http.service';
import { ConstantService } from './../../shared/services/constant.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.less'],
  providers: [ProgramsService, HttpService, ConstantService]
})
export class ProgramsComponent implements OnInit {

  public OrglistPrograms: any;
  public headerOrgdata: any;
  constructor(private programsService: ProgramsService) { }

  ngOnInit() {
    this.getProgramsList();
  }
  public getProgramsList(): void {
    this.programsService.getProgramsList().map(r => r.json())
      .subscribe(data => {
        if (data) {
          this.getHeaderOrgData(data);
        } else {
        }
      });
  }

  public getHeaderOrgData(orgProgramsListData: any): void {
    this.programsService.getHeaderOrgData().map(r => r.json())
      .subscribe(data => {
        if (data) {
          this.OrglistPrograms = orgProgramsListData;
          this.headerOrgdata = data; 
        } else {
        }
      });
  }
}
