import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course, GetCoursesResponse } from '../models/course.model';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  #http = inject(HttpClient);
  #apiURL = 'http://localhost:9000/api';

  async getAll(): Promise<Course[]> {
    const courses$ = this.#http.get<GetCoursesResponse>(`${this.#apiURL}/courses`);
    const response = await firstValueFrom(courses$);
    return response.courses;
  }
}
