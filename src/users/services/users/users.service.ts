import { Injectable } from '@nestjs/common';
import { createUser } from 'src/users/intefaces/createUser.Interface';

@Injectable()
export class UsersService {
  private fakeUsers = [
    {
      username: 'Bob',
      email: 'Bob@email.com',
    },
    {
      username: 'Ben',
      email: 'Ben@email.com',
    },
    {
      username: 'Tom',
      email: 'Tom@email.com',
    },
    {
      username: 'Steve',
      email: 'Steve@email.com',
    },
  ];

  fetchUsers() {
    return this.fakeUsers;
  }

  fetchUserByUsername(username : string){
    
  }

  createuser(newUser: createUser) {
    this.fakeUsers.push(newUser)

    return this.fakeUsers
  }
}
