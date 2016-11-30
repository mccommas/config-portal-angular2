import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ConstantService } from './../../../shared/services/constant.service';
import { HttpService } from './../../../shared/services/http.service';

@Injectable()
export class ProgramEditService {
    meUser;
    dataObj: any;
    constructor(private httpService: HttpService, private constantService: ConstantService) { }
    getProgramData = function () {
        return this.httpService.http_post(this.constantService.requestApi.getProgram, null);
    };  
    getStatesData = function(){
         return this.httpService.http_post(this.constantService.requestApi.getStates, null);
    };
    getHeaderData = function () {
        return this.httpService.http_post(this.constantService.requestApi.nameInfo, null);
    }; 
}
