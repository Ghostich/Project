import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course=[
    
      {'id':1, 'name':'Learn Angular', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/Angular.png'},
      {'id':2, 'name':'Learn Typescript', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/Typescript.png'},
      {'id':3, 'name':'Learn Nodejs', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/Node.png'},
      {'id':4, 'name':'Learn Reactjs', 'description':'Lorem Ipsum is simply dummy text of the printing and typesetting industry.','image':'../../assets/React.png'},
    ]
}
