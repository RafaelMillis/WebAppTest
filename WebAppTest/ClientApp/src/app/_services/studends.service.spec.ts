/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudendsService } from './studends.service';

describe('Service: Studends', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudendsService]
    });
  });

  it('should ...', inject([StudendsService], (service: StudendsService) => {
    expect(service).toBeTruthy();
  }));
});
