import { Component } from '@angular/core';
import { COURSES } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // make the db data available to the component by assigning it to member variables, which can then be accessed from the template
  coreCourse = COURSES[0]; // convoA
  rxjsCourse = COURSES[1]; // convoB
  ngrxCourse = COURSES[2];

  onCardClick() {
    console.log('app component - click event bubbled...');
  }

}
