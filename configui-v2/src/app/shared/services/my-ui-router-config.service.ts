import { Injectable } from '@angular/core';
import { UIRouter, UIRouterModule } from "ui-router-ng2";

@Injectable()
export class MyUiRouterConfigService {
  // This service is to boot ui-router visualization
  constructor(router: UIRouter) {
    var vis = window['ui-router-visualizer'];
    vis.visualizer(router);
    // router.urlRouterProvider.otherwise("/cas");
  }

}
