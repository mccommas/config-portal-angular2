import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {
  localEnvironment: boolean = true;
  apiUrl: string = 'http://localhost:8181/';
  requestApi = {
    getCasList: 'getCasList',
    getApplicationList: 'getApplicationList',
    getOrganizationList: 'getOrganizationList',
    nameInfoOrg: 'nameInfoOrg',
    nameInfo: 'nameInfo',
    programsList: 'programsList',
    getProgram: 'getProgram',
    getStates: 'getStates'
  };
  localJsonResource = {
    getCasList: 'data/new-nav-casList.json',
    getApplicationList: 'data/new-nav-appList.json',
    getOrganizationList: 'data/new-nav-orgList.json',
    nameInfoOrg: 'data/nameInfoOrg.json',
    nameInfo: 'data/nameInfo.json',
    programsList: 'data/Program_List.json',
    getProgram: 'data/program.json',
    getStates: 'data/states.json'
  };
  getRequestUrl = function (action) {
    return this.apiUrl + this.requestApi[action];
  };
  constructor() { }

}
