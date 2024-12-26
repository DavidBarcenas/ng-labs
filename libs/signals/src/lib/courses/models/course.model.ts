export type Course = {
  id: string;
  title: string;
  longDescription: string;
  seqNo: number;
  iconUrl: string;
  price: number;
  uploadedImageUrl: string;
  courseListIcon: string;
  category: CourseCategory;
  lessonsCount: number;
};

export type CourseCategory = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
