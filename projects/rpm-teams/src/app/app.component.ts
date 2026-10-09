import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@Component({
  selector: 'app-teams-root',
  standalone: true,
  imports: [RouterOutlet, ConfirmDialogModule],
  template: '<p-confirmdialog></p-confirmdialog><router-outlet></router-outlet>',
})
export class AppComponent {}

