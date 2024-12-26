import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable()
export class CoursesWithFetchService {
  #apiURL = 'http://localhost:9000/api';

  async getAll(): Promise<Course[]> {
    const response = await fetch(`${this.#apiURL}/courses`);
    const data = await response.json();
    return data.courses;
  }
}
