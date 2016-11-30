/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyUiRouterConfigService } from './my-ui-router-config.service';

describe('Service: MyUiRouterConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyUiRouterConfigService]
    });
  });

  it('should ...', inject([MyUiRouterConfigService], (service: MyUiRouterConfigService) => {
    expect(service).toBeTruthy();
  }));
});
