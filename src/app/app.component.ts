import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  showData = false;
ngOnInit(){
  setTimeout(() => {
        this.showData = true;
    }, 5000);
}
}
