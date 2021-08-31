import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
  private url = environment.api + '/doctors';

  getDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.url);
  }

  constructor(private http: HttpClient) {}
}
