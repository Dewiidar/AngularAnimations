import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {transition, trigger} from '@angular/animations';
import {slideAnimation} from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
      trigger('routerAnimations', [
          transition('* => *', slideAnimation)
      ])
  ]
})
export class AppComponent {
  title = 'AngularAnimations';

  prepareRouterTransition(outlet: RouterOutlet) {
    const animation = outlet.activatedRouteData.animation || {};
    return animation.value || null;
  }
}
