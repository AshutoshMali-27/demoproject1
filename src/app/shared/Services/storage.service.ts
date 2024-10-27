import { Injectable } from '@angular/core';
import { Userinfo } from '../Models/Userinfo';


@Injectable({
  providedIn: 'root'
})
export class StorageService {


  steUser(user:Userinfo):void{
    localStorage.setItem('currentUser',JSON.stringify(user));
  }
  getUser():any{
    return JSON.parse(localStorage.getItem('currentUser'));
  }
  removeUser():void{
    localStorage.removeItem("currentUser");
  }

	setToken(token: string): void {
		localStorage.setItem("token", token);
	}

	getToken(): string {
		return localStorage.getItem("token");
	}

	removeToken(): void {
		localStorage.removeItem("token");
	}

	isValid(): boolean {
		const token = this.getToken();
		return !!token;
	}

	loggedIn(): boolean {
		return this.isValid();
	}

} 
