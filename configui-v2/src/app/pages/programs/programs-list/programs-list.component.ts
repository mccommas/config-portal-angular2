import { Component, OnInit, Input, ViewEncapsulation, ViewChild } from '@angular/core';  
@Component({
  selector: 'app-programs-list',
  templateUrl: './programs-list.component.html',
  styleUrls: ['./programs-list.component.less']
})
export class ProgramsListComponent implements OnInit { 
  @Input() OrglistPrograms: any;
  constructor() { }

  ngOnInit() {
    console.log(this.OrglistPrograms);
  }

  public showActionButtons(program, state): void {
    program.showButtons = state;
  }

}
