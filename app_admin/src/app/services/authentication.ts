import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { TripData } from './trip-data';

@Injectable({
  providedIn: 'root'
})
export class Authentication {

  // Setup our storage and service access
  constructor(@Inject(BROWSER_STORAGE) private storage: Storage, private tripDataService: TripData) { }

  // Variable to handle Authentication Responses
  authResponse: AuthResponse = new AuthResponse();

  // Get our token from our Storage provider
  // the key for our token is named 'travlr-token'
  public getToken(): string {
    let out: any;
    out = this.storage.getItem('travlr-token');

    // Make sure we return a string even if we don't have a token
    if(!out) {
      return '';
    }
    return out;
  }

  // Save our token to our Storage provider
  public saveToken(token: string): void {
    this.storage.setItem('travlr-token', token);
  }

  // Logout of our app and remove the JWT from Storage
  public logout(): void {
    this.storage.removeItem('travlr-token');
  }

  // Boolean to determine if we are logged in and the token is still valid.
  // Even if we have a token, we will still have to reauthenticate if the token has expired.
  public isLoggedIn(): boolean {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  // Retrieve the current user.
  // This function should only be called afetr the calling method has chekced to make sure
  // that the user is logged in.
  public getCurrentUser(): User {
    const token = this.getToken();
    const { email, name } = JSON.parse(atob(token.split('.')[1]));
    return { email, name } as User;
  }

  // Login method that leverages the login method in tripData.ts.
  // Because that method returns an observable, we subscribe to
  // the result and only process when the Observable condition is satisfied.
  public login(user: User, password: string): void {
    this.tripDataService.login(user, password).subscribe({
      next: (value: any) => {
        if (value) {
          console.log(value);
          this.authResponse = value;
          this.saveToken(this.authResponse.token);
        }
      },
      error: (err: any) => console.error('Error:' + err),
    })
  }

  // Register method that leverages the register method in tripData.ts.
  // Because that method returns an observable, we subscribe to
  // the result and only process when the Observable condition is satisfied.
  public register(user: User, password: string): void {
    this.tripDataService.register(user, password).subscribe({
      next: (value: any) => {
        if (value) {
          console.log(value);
          this.authResponse = value;
          this.saveToken(this.authResponse.token);
        }
      },
      error: (err: any) => console.error('Error:' + err),
    })
  }
}
