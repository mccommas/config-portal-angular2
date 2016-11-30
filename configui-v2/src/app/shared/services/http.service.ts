import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { ConstantService } from './constant.service';

@Injectable()
export class HttpService {
  constructor(private http: Http, private constantService: ConstantService) { }
  http_post = function (action, requestdata) {
    if (!this.constantService.localEnvironment) {
      let header = new Headers();
      header.append("Content-Type", "application/json");
      return this.http.post(this.constantService.getRequestUrl(action), JSON.stringify(requestdata), {
        headers: header
      });
    } else {
      return this.http_get_local(action);
    }
  };
  http_get_local = function (action) { 
    return this.http.get(this.constantService.localJsonResource[action]);
  };
}
