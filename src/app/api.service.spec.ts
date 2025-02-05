import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service'; 

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login', () => {
    const dummyResponse = {};
    service.login('testuser', 'testpassword', true).subscribe((response: any) => {
      expect(response).toEqual(dummyResponse);
    });
    const req = httpMock.expectOne('"C:\Users\User\git\dental-hub-api\dental-hub-api\dental-hub-api"');
    expect(req.request.method).toBe('POST');
    req.flush(dummyResponse);
  });
});