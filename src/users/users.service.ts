import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John', role: 'admin' },
    { id: 2, name: 'Doe', role: 'employee' },
    { id: 3, name: 'Jane', role: 'intern' },
    { id: 4, name: 'Doe', role: 'employee' },
    { id: 5, name: 'Smith', role: 'admin' },
    { id: 6, name: 'Doe', role: 'intern' },
    { id: 7, name: 'John', role: 'employee' },
    { id: 8, name: 'Smith', role: 'employee' },
    { id: 9, name: 'Doe', role: 'employee' },
    { id: 10, name: 'John', role: 'intern' },
    { id: 11, name: 'Smith', role: 'employee' },
  ];

  create(user: CreateUserDto) {
    const newUser = {
      id: Date.now(),
      name: user.name,
      role: user.role,
    };

    this.users.push(newUser);

    return newUser;
  }

  findAll(role?: string) {
    if (role) {
      return this.users.filter((u) => u.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((u) => u.id === id);

    if (!user) {
      return 'User not found';
    }

    return user;
  }

  findInterns() {
    return this.users.filter((u) => u.role === 'intern');
  }

  update(id: number, user: UpdateUserDto) {
    let updatingUser = this.users.find((u) => u.id === id);

    if (!updatingUser) {
      return 'User not found';
    }

    // if you didn't understand this, search for it
    updatingUser = {
      ...updatingUser,
      ...user,
    };

    this.users = this.users.map((u) => (u.id === id ? updatingUser : u));

    return updatingUser;
  }

  remove(id: number) {
    const removingUser = this.users.find((u) => u.id === id);

    if (!removingUser) {
      return 'User not found';
    }

    this.users = this.users.filter((u) => u.id !== id);

    return removingUser;
  }
}
