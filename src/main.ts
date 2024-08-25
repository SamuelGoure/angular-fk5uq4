import 'zone.js';
import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'invoice-app',
  standalone: true,
  template: `
    <h1>Gestionnaire de Factures</h1>
  `,
})
export class App {}

bootstrapApplication(App);
