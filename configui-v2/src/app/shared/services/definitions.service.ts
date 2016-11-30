import { Injectable } from '@angular/core';

@Injectable()
export class DefinitionsService {
  programStartTerms: any[] = [
    {
      value: 'Winter',
      displayName: 'Winter'
    },
    {
      value: 'Spring',
      displayName: 'Spring'
    },
    {
      value: 'Summer 1',
      displayName: 'Summer 1'
    },
    {
      value: 'Summer 2',
      displayName: 'Summer 2'
    },
    {
      value: 'Fall',
      displayName: 'Fall'
    },

    {
      value: 'Interim',
      displayName: 'Interim'
    },
    {
      value: 'Rolling',
      displayName: 'Rolling'
    }
  ];
  constructor() { }

}
