import { Component } from '@angular/core';

@Component({
  selector: 'app-forbidden-component',
  template: `
    <article>
      <header>Access Forbidden</header>
      <p>Sorry, you don't have access to App Administration :-(</p>
      <p><a routerLink="/home">Return to Home</a></p>
    </article>
  `
})
export class ForbiddenComponent {}
