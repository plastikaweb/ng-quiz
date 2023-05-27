import { TestBed } from '@angular/core/testing';

import { QuzCategoriesStateService } from './quz-categories-state.service';

describe('QuzCategoriesStateService', () => {
  let service: QuzCategoriesStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuzCategoriesStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
