import { Component, OnInit } from '@angular/core';
import { StudendsService } from '../_services/studends.service';
import { Student } from '../_interfaces/student';
import { StudentDetailsComponent } from '../student-details/student-details.component';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];
  searchText: string;
  constructor(private studentsService: StudendsService) { }

  ngOnInit() {
    this.getStudents();    
  }

  getStudents(){
    this.studentsService.getStudents().subscribe( studs => {
      this.students = studs;
    });
  }

  getStudentsBy(){
    this.studentsService.getStudentsBy(this.searchText).subscribe( studs => {
      this.students = studs;
    });
  }

  onNotify() {
    window.alert('Notification sent');
  }
}


