import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ConstantService } from './../../shared/services/constant.service';
import { HttpService } from './../../shared/services/http.service';

@Injectable()
export class NavigationService {
    meUser;
    dataObj: any;
    constructor(private httpService: HttpService, private constantService: ConstantService) { }
    getCasList = function () {
        return this.httpService.http_post(this.constantService.requestApi.getCasList, null);
    };
    getApplicationList = function () {
        return this.httpService.http_post(this.constantService.requestApi.getApplicationList, null);
    };
    getOrganizationList = function () {
        return this.httpService.http_post(this.constantService.requestApi.getOrganizationList, null);
    };
}
