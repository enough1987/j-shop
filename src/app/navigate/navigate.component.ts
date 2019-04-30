import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.component.html',
  styleUrls: ['./navigate.component.scss']
})
export class NavigateComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map( result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  links: object[] = [
    { path: '/app-products', label: 'Product', active: 'button-active'},
     { path: '/app-shop', label: 'Shop', active: 'button-active'}
  ];



}
