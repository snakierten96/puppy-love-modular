import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formShowing: boolean = false;
  views: Object[] = [
    {
      name: "My Account",
      description: "Edit my account information",
      icon: "assignment ind"
    },
    {
      name: "Potential dates",
      description: "Find your soulmate!",
      icon: "pets"
    }
  ];

  dogs: Object[] = [
    { name: "Porter" },
    { name: "Mal" },
    { name: "Razzle" },
    { name: "Koby" },
    { name: "Molly" },
    { name: "Husi" }
  ];
      
}
