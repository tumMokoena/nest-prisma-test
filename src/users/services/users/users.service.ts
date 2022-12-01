import { Injectable } from '@nestjs/common';
import { createUser } from 'src/users/intefaces/createUser.Interface';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: 'Bob',
      email: 'Bob@email.com',
      password: 'password123'
    },
    {
      username: 'Ben',
      email: 'Ben@email.com',
      password: 'password123'
    },
    {
      username: 'Tom',
      email: 'Tom@email.com',
      password: 'password123'
    },
    {
      username: 'Steve',
      email: 'Steve@email.com',
      password: 'password123'
    },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  fetchUserByUsername(username : string){

    const user = this.fakeUsers.find(user => user.username === username);
    return user
  }

  createuser(newUser: createUser) {
    this.fakeUsers.push(newUser)

    return this.fakeUsers
  }
}
