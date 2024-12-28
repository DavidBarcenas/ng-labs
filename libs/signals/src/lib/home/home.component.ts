import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Course } from '../courses/models/course.model';
import { CoursesService } from '../courses/data-access/courses.service';
import { CourseListComponent } from '../courses/ui/course-list/course-list.component';

@Component({
  selector: 'lib-home',
  imports: [CourseListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  #coursesService = inject(CoursesService);
  courses = signal<Course[]>([]);
  beginnerCourses = computed(() => {
    const courses = this.courses();
    return courses.filter((course) => course.category === 'BEGINNER');
  });

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
