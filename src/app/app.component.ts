import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // set entire COURSES array to 'courses' 
  courses = COURSES;

  // make the db data available to the component by assigning it to member variable, which can then be accessed from the template
  // coreCourse = COURSES[0]; 
  // rxjsCourse = COURSES[1]; 
  // ngrxCourse = COURSES[2];

  onCourseSelected(course: Course) {
    console.log('app component - course selected:', course);
  }

}

// REF: https://angular.io/guide/inputs-outputs

// To make data visible to a template, it first needs to be made available at the level of a component. This is done by assigning the data to one or more member variables.

// A common pattern in Angular is sharing data between a parent component and one or more child components. We implement this pattern with the @Input() and @Output() decorators.

// A parent communicates data and data changes to its child component using 

// The @Input() decorator in a child component or directive signifies that the property can receive its value from its parent component.