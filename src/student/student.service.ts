import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
  private students = [
    { id: 1, name: 'John Doe', age: 20 },
    { id: 2, name: 'Jane Smith', age: 22 },
  ];

  // Get API's
  getAllStudents() {
    return this.students;
  }

  getStudentById(id: number) {
    const student = this.students.find((s) => s.id === id);
    if (!student)
      throw new NotFoundException(`Student with id ${id} not found`);
    return student;
  }

  // Post API's
  createStudent(data: { name: string; age: number }) {
    const newStudent = {
      id: this.students.length + 1,
      ...data,
    };
    this.students.push(newStudent);
    return newStudent;
  }

  // Put API's
  updateStudent(id: number, data: { name: string; age: number }) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1)
      throw new NotFoundException(`Student with id ${id} not found`);
    this.students[index] = { id, ...data };
    return this.students[index];
  }

  // Patch API's
  patchStudent(id: number, data: Partial<{ name: string; age: number }>) {
    const student = this.getStudentById(id);
    Object.assign(student, data);
    return student;
  }

  //Delete API's
  deleteStudent(id: number) {
    const index = this.students.findIndex((s) => s.id === id);
    if (index === -1)
      throw new NotFoundException(`Student with id ${id} not found`);
    const deletedStudent = this.students.splice(index, 1);
    return {
      message: `Student with id ${id} deleted successfully`,
      student: deletedStudent[0],
    };
  }
}
