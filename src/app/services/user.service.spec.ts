import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { UsersService } from './users.service';

describe('UserService', () => {
  let baseApiUrl: string = environment.baseApiUrl;
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return a user result', () => {
    service.getAllUsers().subscribe(result => {
      expect(result).toBeTruthy();
      
      //expect(result.length).toEqual(1);
      console.log('result verified');
    });
    const req = httpMock.expectOne(baseApiUrl + 'Users/');
    expect(req.request.method).toBe('GET');
    req.flush({
      results: [
        {
          id: 1,
    name: 'Chandan',
    address: 'landran',
    city: 'Mohali',
    role: 'Admin',
    username: 'abd',
    password: 123

    
          
        }
      ]
    })

  })
});
 