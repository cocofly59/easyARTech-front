import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  constructor(private httpClient: HttpClient) {}

  getTestValue(): Observable<string> {
    return this.httpClient.get('/test').pipe(
      map((body: any) => body.value),
      catchError(() => of('Error, could not use the test service.'))
    );
  }
}
