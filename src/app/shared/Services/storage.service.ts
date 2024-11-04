// import { Injectable } from '@angular/core';
// import { Userinfo } from '../Models/Userinfo';


// @Injectable({
//   providedIn: 'root'
// })
// export class StorageService {


//   steUser(user:Userinfo):void{
//     localStorage.setItem('currentUser',JSON.stringify(user));
//   }
//   getUser(): Userinfo | null {
//     if (typeof localStorage !== 'undefined') {
//       const user = localStorage.getItem('user');
//       return user ? JSON.parse(user) : null;
//     }
//     return null; // Return null or a default value if localStorage is not available
//   }
//   removeUser():void{
//     localStorage.removeItem("currentUser");
//   }

// 	// setToken(token: string): void {
// 	// 	localStorage.setItem("token", token);
// 	// }

// 	getToken(): string {
// 		return localStorage.getItem("token");
// 	}

// 	// removeToken(): void {
// 	// 	localStorage.removeItem("token");
// 	// }

// 	isValid(): boolean {
// 		const token = this.getToken();
// 		return !!token;
// 	}

// 	loggedIn(): boolean {
// 		return this.isValid();
// 	}

// } 

import { Injectable } from '@angular/core';
import { Userinfo } from '../Models/Userinfo';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

	steUser(user: Userinfo): void {
    if (this.isBrowser()) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  }

  getUser(): Userinfo | null {
    if (this.isBrowser()) {
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }

  removeUser(): void {
    if (this.isBrowser()) {
      localStorage.removeItem("currentUser");
    }
  }

  setToken(token: string): void {
    if (this.isBrowser()) {
      localStorage.setItem("token", token);
    }
  }

  getToken(): string | null {
    debugger;
    if (this.isBrowser()) {
      return localStorage.getItem("token");
    }
    return null;
  }

  removeToken(): void {
    if (this.isBrowser()) {
      localStorage.removeItem("token");
    }
  }

  isValid(): boolean {
    const token = this.getToken();
    return !!token;
  }

  loggedIn(): boolean {
    return this.isValid();
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined';
  }
}

