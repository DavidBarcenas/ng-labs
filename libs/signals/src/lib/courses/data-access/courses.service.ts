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

  async create(course: Omit<Course, 'id'>): Promise<Course> {
    const course$ = this.#http.post<Course>(`${this.#apiURL}/courses`, course);
    return firstValueFrom(course$);
  }

  async update(id: string, course: Partial<Course>): Promise<Course> {
    const course$ = this.#http.put<Course>(`${this.#apiURL}/courses/${id}`, course);
    return firstValueFrom(course$);
  }

  async delete(id: string): Promise<void> {
    const deletedCourse$ = this.#http.delete<void>(`${this.#apiURL}/courses/${id}`);
    return firstValueFrom(deletedCourse$);
  }
}
