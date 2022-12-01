import {
  Controller,
  Get,
  Post,
  Param,
  Res,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response, Request, query } from 'express';
import { winstonLogger } from 'src/api_logger';
import { CreateUserDto } from 'src/users/Dtos/createUser.Dto';
import { UsersService } from 'src/users/services/users/users.service';

const TAG = "usersController";

@Controller('users')
@ApiTags('Users')
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

    winstonLogger?.info(
      `User with email: ${userData.email}, username: ${userData.username} created successfully`,
      TAG
    );

    res.status(201).json({ success: true, data: users });
  }
}
