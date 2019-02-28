import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  shared: SharedService;


  constructor(private router: Router) {
    this.shared = SharedService.getInstance();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.shared.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }



}
