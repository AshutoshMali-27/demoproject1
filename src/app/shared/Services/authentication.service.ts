import { Injectable } from '@angular/core';
import { AUTH_PATH } from '../constants/constant';
import { BehaviorSubject, Observable } from 'rxjs';
import { Userinfo } from '../Models/Userinfo';

import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  protected endpoint = 'https://localhost:7281/api/Auth/'  ;
  protected CurrentUserSubject: BehaviorSubject<Userinfo | null>;
  public currentUser: Observable<Userinfo | null>;
  public redirectUrl: string;
  protected loggedIn: BehaviorSubject<boolean>;
  authStatus: Observable<boolean>;

  constructor(
    protected api: ApiService,
    private StorageService: StorageService,
    private router: Router
  ) {
    this.CurrentUserSubject = new BehaviorSubject<Userinfo | null>(this.StorageService.getUser());
    this.currentUser = this.CurrentUserSubject.asObservable();
    //this.loggedIn = new BehaviorSubject<boolean>(this.StorageService.loggedIn());  // Moved initialization here
    //this.authStatus = this.loggedIn.asObservable();
  }

  setUserSession(user: Userinfo, accessToken: string): void {
    this.CurrentUserSubject.next(user);
    this.StorageService.steUser(user);
    this.changeAuthStatus(true);
    this.router.navigate(["/dashboard"]).then(r => true);
  }

  login(data: object): Observable<any> {
    return this.api.post(this.endpoint + "login", data);
  }

  logout(): Observable<any> {
    return this.api.get("logout");
  }

  clearUserSession(): void {
    this.CurrentUserSubject.next(null);
    this.StorageService.removeUser();
 //   this.StorageService.removeToken();
    this.changeAuthStatus(false);
  }

  public get currentUserValue(): Userinfo | null {
    return this.CurrentUserSubject.value;
  }

  changeAuthStatus(value: boolean): void {
    this.loggedIn.next(value);
  }
}
