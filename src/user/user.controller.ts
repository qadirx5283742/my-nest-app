import { Controller, Get } from '@nestjs/common';

@Controller('user') // Controller decorator
export class UserController {
  @Get() // Get decorator
  getUser() {
    return 'User data fetch successfully!!!';
  }
}
