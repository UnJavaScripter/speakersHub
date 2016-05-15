import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceService {

  userAuthentication: boolean;
  authData;

  set(authData) {
    if (authData) {
      this.authData = authData;
      this.userAuthentication = true;
    }
  }

  get() {
    return this.userAuthentication;
  }

  constructor() {
    this.userAuthentication = false;
  }

}
