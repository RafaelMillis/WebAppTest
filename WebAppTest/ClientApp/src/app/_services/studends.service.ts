import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Student } from '../_interfaces/student';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StudendsService {

constructor(private http: HttpClient) { }

getStudents()
{
  return this.http.get<Student[]>( environment.ApiURL +   '/api/students/getstudents');
}

getStudentsBy(searchText: string)
{
  return this.http.get<Student[]>( environment.ApiURL +   '/api/students/getstudents?txt='+ searchText);
}

}
