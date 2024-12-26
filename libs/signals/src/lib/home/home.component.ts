import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Course } from '../courses/models/course.model';
import { CoursesService } from '../courses/data-access/courses.service';

@Component({
  selector: 'lib-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  #coursesService = inject(CoursesService);
  courses = signal<Course[]>([]);

  constructor() {
    this.getAllCourses();
  }

  async getAllCourses() {
    try {
      const data = await this.#coursesService.getAll();
      this.courses.set(data);
    } catch (error) {
      console.error(error);
    }
  }
}
