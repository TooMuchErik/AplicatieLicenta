// // api.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class ApiService {
//   private apiUrl = 'http://localhost:8080/api/text/reverse';

//   constructor(private http: HttpClient) {}

//   reverseText(text: string): Observable<string> {
//     return this.http.post(this.apiUrl, text, { responseType: 'text' });
//   }
// }


//