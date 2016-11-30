/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DefinitionsService } from './definitions.service';

describe('Service: Definitions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefinitionsService]
    });
  });

  it('should ...', inject([DefinitionsService], (service: DefinitionsService) => {
    expect(service).toBeTruthy();
  }));
});
