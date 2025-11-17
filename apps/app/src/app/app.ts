import { Component, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { Suggestions } from './suggestions/suggestions';

@Component({
  imports: [Suggestions],
  selector: 'app-root',
  template: ` <app-suggestions></app-suggestions> `,
})
export class App {
  readonly iconRegistry = inject(MatIconRegistry);

  constructor() {
    this.iconRegistry.setDefaultFontSetClass('material-symbols-outlined');
  }
}
