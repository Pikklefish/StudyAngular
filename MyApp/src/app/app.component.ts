import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //our componet name is <app-root>
  templateUrl: './app.component.html',
  // template: '<h1> HelloWorld</h1>',   this is for one thing, but the above is for a file (more complecated)
  styleUrls: ['./app.component.css']

  //  components need a screen to go with

})
export class AppComponent {
  title = 'MyApp';
}
