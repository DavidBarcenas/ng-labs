import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CoursesWithFetchService } from '../courses/data-access/courses-with-fetch.service';
import { Course } from '../courses/models/course.model';

@Component({
  selector: 'lib-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  #coursesWithFetchService = inject(CoursesWithFetchService);
  courses = signal<Course[]>([]);

  constructor() {
    this.getAllCourses();
  }

  async getAllCourses() {
    try {
      const data = await this.#coursesWithFetchService.getAll();
      this.courses.set(data);
    } catch (error) {
      console.error(error);
    }
  }
}
