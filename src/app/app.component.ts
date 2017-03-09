import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{title}}</h1>`,
})
export class AppComponent  { 
  title = 'Tours of Heroes';
  hero = 'WindStorm';
  name = 'Angular'; 
}
