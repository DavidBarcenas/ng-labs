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

  async create(course: Omit<Course, 'id'>): Promise<Course> {
    const response = await fetch(`${this.#apiURL}/courses`, {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  async update(id: string, changes: Partial<Course>): Promise<Course> {
    const response = await fetch(`${this.#apiURL}/courses/${id}`, {
      method: 'PUT',
      body: JSON.stringify(changes),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  }

  async delete(id: string): Promise<void> {
    await fetch(`${this.#apiURL}/courses/${id}`, {
      method: 'DELETE',
    });
  }
}
