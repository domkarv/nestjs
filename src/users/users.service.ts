import { Injectable, NotFoundException } from '@nestjs/common';
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
      ...user,
    };

    this.users.push(newUser);
    return newUser;
  }

  findAll(role?: string) {
    if (role) {
      const userList = this.users.filter((u) => u.role === role);

      if (!userList) {
        throw new NotFoundException(`No users with role "${role}" found`);
      }

      return userList;
    }

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((u) => u.id === id);

    if (!user) throw new NotFoundException(`User with id "${id}" not found`);

    return user;
  }

  findInterns() {
    const interns = this.users.filter((u) => u.role === 'intern');

    if (!interns) throw new NotFoundException('No interns found');

    return interns;
  }

  update(id: number, user: UpdateUserDto) {
    if (!this.findOne(id)) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }

    this.users = this.users.map((u) => {
      if (u.id === id) {
        return {
          ...u,
          ...user,
        };
      }
      return u;
    });

    return this.findOne(id);
  }

  remove(id: number) {
    const removingUser = this.findOne(id);

    if (!removingUser) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }

    this.users = this.users.filter((u) => u.id !== id);

    return removingUser;
  }
}
