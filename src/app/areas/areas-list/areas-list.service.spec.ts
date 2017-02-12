/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AreasListService } from './areas-list.service';

describe('AreasListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AreasListService]
    });
  });

  it('should ...', inject([AreasListService], (service: AreasListService) => {
    expect(service).toBeTruthy();
  }));
});
