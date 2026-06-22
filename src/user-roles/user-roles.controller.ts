import { Controller, Get, UseGuards } from '@nestjs/common';
import { RolesGuard } from '../guards/roles/roles.guard';
import { Role } from '../guards/roles/roles.enums';
import { Roles } from '../guards/roles/roles.decorator';

@Controller('user-roles')
export class UserRolesController {
  @Get('admin-data')
  @UseGuards(RolesGuard)
  @Roles(Role.Admin)
  getAdminData() {
    return { message: 'This is admin data' };
  }

  @Get('user-data')
  @Roles(Role.User)
  getUserData() {
    return { message: 'This is user data' };
  }
}
