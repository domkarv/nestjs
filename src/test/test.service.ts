import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { UpdateTestDto } from './dto/update-test.dto';

@Injectable()
export class TestService {
  private test = [
    { id: 1, name: 'Maths' },
    { id: 2, name: 'Science' },
    { id: 3, name: 'English' },
    { id: 4, name: 'Maths' },
    { id: 5, name: 'Geography' },
    { id: 6, name: 'Art' },
    { id: 7, name: 'Maths' },
    { id: 8, name: 'Drama' },
    { id: 9, name: 'PE' },
    { id: 10, name: 'Maths' },
    { id: 11, name: 'Computing' },
  ];

  create(test: CreateTestDto) {
    this.test.push({
      name: test.name,
      id: Date.now(),
    });

    return this.test;
  }

  findAll(sub?: string) {
    if (!sub) {
      return this.test;
    }
    return this.test.filter((test) => test.name === sub);
  }

  findOne(id: number) {
    return this.test.find((test) => test.id === id);
  }

  subtest() {
    return 'This is a subtest';
  }

  update(id: number, test: UpdateTestDto) {
    this.test = this.test.map((t) => {
      if (t.id === id) {
        // if you didn't understand this, search for it
        return {
          ...t,
          ...test,
        };
      }
      return t;
    });

    return this.test;
  }

  remove(id: number) {
    this.test = this.test.filter((test) => test.id !== id);
    return this.test;
  }
}
