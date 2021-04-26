import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[];

  constructor() {
    this.users = [];
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  getUserByName(username: string): User {
    return this.users.find(el => el.username == username);
  }

  loginUser(user: User): boolean {
    let login = this.users.find(el => el.username == user.username && el.password == user.password)
    return login ? true : false;
  }
}
