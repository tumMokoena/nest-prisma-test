import {
  Controller,
  Get,
  Post,
  Param,
  Res,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { Response, Request, query } from 'express';
import { CreateUserDto } from 'src/users/Dtos/createUser.Dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getUsers(
    // @Query('sortDesc', ParseBoolPipe) sortby: boolean,
    // @Query('filterBy') filterby: string,
    @Res() res: Response,
  ) {
    const users = this.usersService.fetchUsers();
    res.status(200).json({
      success: true,
      data: users,
    });
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    console.log(id);
    res.status(200).json({ success: true, data: `Return user with id ${id}`});
  }

  @Post()
  createUser(@Body() userData: CreateUserDto, @Res() res: Response) {
    const users = this.usersService.createuser(userData);

    res.status(201).json({ success: true, data: users });
  }
}
