export class GradeDto {
    CourseName: string;
    Grade: number;
}

export class GradeToPostDto{
    studentId: string;
    courseId: string;
    value: number;
}