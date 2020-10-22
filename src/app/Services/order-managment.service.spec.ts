import { TestBed } from '@angular/core/testing';

import { OrderManagmentService } from './order-managment.service';

describe('OrderManagmentService', () => {
  let service: OrderManagmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderManagmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
