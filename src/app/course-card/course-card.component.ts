import { Component, Input } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  // pass course db data from AppComponent to CourseCardComponent
    
  // eg. of passing a single property (using [title] in the template):
  // @Input() title: string;
  
  // better way: Define an interface for the Course object in a .model file. Input the interface i.e. the whole Course object into the component that needs it. The component can now access any property of the Course Interface!
  // set the inputted data to an object property were calling 'course'
  @Input() course: Course; 

  // a STANDARD BROWSER EVENT, like (click), that is triggered in a child component will ALSO trigger any event (standard only event or even custom?) that is defined in a parent
  // eg. clicking on the 'View Course' button will trigger the onViewCourseButtonClick() method first, then any events higher up in the component tree (in this case, the onCardClick() method in the AppComponent) 
  // to avoid this behaviour, we can use CUSTOM EVENT LISTENERS. with custom event handlers, we then need an event emitter in the component
  
  // to read REF: https://blog.davidjs.com/2018/02/angular-custom-event-bubbling/
  onViewCourseClick() {
    console.log('clicked from course card component');
  }
  
}
