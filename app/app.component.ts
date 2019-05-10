import { Component } from '@angular/core'; 


interface Nav {
  link: string,
  name: string,
  exact: boolean
}
@Component({
  selector: 'app-component', 
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html' 
})
export class AppComponent { 
  nav: Nav[]=[
    { link: "/", name: "Home", exact: true },
    { link: "/passengers", name: "Passenger", exact: true },
    { link: "/oops", name: "NotFound", exact: false } 
  ]
}