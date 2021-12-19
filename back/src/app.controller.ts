import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import User from './entities/user';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user')
  async getUser(): Promise<User> {
    await new Promise(res => setTimeout(res, 2000));
    const user = new User();
    user._id = 'b5b59131-a8f3-4591-a576-c0422decea0d'
    user.name = 'John';
    user.email = 'john@doe.com';
    user.phone = 123999999;
    user.children = [
      {
        _id: '94a67150-accf-4545-9cba-a952ad33256d',
        name: 'Johnny',
        gender: 'Male',
        age: 10,
        school: 'Rutherford Elementary School',
        grade: 10
      },
      {
        _id: '4cd25ab5-aa76-436f-8cd3-151109b2cdfd',
        name: 'Sophia',
        gender: 'Female',
        age: 8,
        school: 'Auburndale Elementary School',
        grade: 10
      }
    ];
    user.languages = [
      'English',
      'Spanish',
      'French'
    ];
    user.address = {
      country: 'United States',
      state: 'Kentucky',
      city: 'Louisville',
      street: 'E Market St',
      number: 1108
    };
    return user;
  }
}
