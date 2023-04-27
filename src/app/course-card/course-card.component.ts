import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input() course: Course; 
  
  // Note: name of custom event (courseSelected) must be the same as the name of event emitter, courseSelected. This is bcus angular takes the name of the custom event from the event emitter if nothing else gets specified 
  // @Output() courseSelected = new EventEmitter<Course>();
  
  // If we want to name our emitter something different than the custom event name in the template, say, 'courseEmitter' we can do so by passing the custom event name we use in our template as a string parameter to @Output(), like so:
  @Output('courseSelected') courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    console.log('card component - View Course button clicked');
    this.courseEmitter.emit(this.course);
  }
  
}

  // ---- INPUT data from a parent component

  // pass course db data from AppComponent to CourseCardComponent
    
  // eg. of passing a single property (using [title] in the template):
  // @Input() title: string;
  
  // better way: Define an interface for the Course object in a .model file. Input the interface i.e. the whole Course object into the component that needs it. The component can now access any property of the Course Interface!
  // set the inputted data to an object property were calling 'course'


  // -----------------------------------------------------------------
  
  // ---- OUTPUT Custom Events and Event Emitters
  
  // CUSTOM CLICK EVENTS DO NOT BUBBLE UP THE COMPONENT HIERARCHY - BUT STANDARD EVENTS DO! 
  
  // After defining our custom event in the parent component, we now want to emit the event from the child. To do that, we need a custom Event Emitter:
  
  // 1. First, we create a new instance of Angular's EventEmitter class and prefix it with the @Output() decorator. We can pass it an optional type parameter, which will define what type of values are getting emitted. In this case, we want to emit an instance of Course. 
  // @Output() courseSelected = new EventEmitter<Course>();
    // 2. We can then use this Course-selected emitter in our method to emit a custom value. Then, to .emit(), we pass  in the value of the course that got selected (that the user clicked on). With this implementation, whenever we click on the 'View Course' button, we emit our custom event that passes in the selected course as a payload (def??). The payload is then caught at the level of the parent component using the custom event handler. 
    // 3. We can now retrieve the emitted value by passing the special '$event' variable to onCourseSelected() in our parent component's template.
    // 4. Now, in the onCourseSelected() method definition in our component, we can pass as a parameter the event that was emitted by the event emitter, i.e. 'course: Course'
    // this.courseSelected.emit(this.course);


  // to read REF: https://angular.io/guide/inputs-outputs
  // to read REF: https://angular.io/guide/event-binding
  // to read REF: https://blog.davidjs.com/2018/02/angular-custom-event-bubbling/

  // a STANDARD BROWSER EVENT, like (click), that is triggered in a child component will ALSO trigger any event (standard only event or even custom?) that is defined in a parent
  // eg. clicking on the 'View Course' button will trigger the onViewCourseButtonClick() method first, then any events higher up in the component tree (in this case, the onCardClick() method in the AppComponent) 
  // to avoid this behaviour (???), we can use CUSTOM EVENT LISTENERS. with custom event handlers, we then need an event emitter in the component
  