import {
  Controller,
  Get,
  Post,
  Param,
  Res,
  Req,
  Body,
  Query,
  UsePipes,
  ParseIntPipe,
  ParseBoolPipe,
} from '@nestjs/common';
import { Response, Request, query } from 'express';
import { CreateUserDto } from 'src/users/Dtos/createUser.Dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers(
    @Query('sortDesc', ParseBoolPipe) sortby: boolean,
    @Query('filterBy') filterby: string,
    @Res() res: Response,
  ) {
    console.log(`sort by : ${sortby}`);
    console.log(`filter by : ${filterby}`);

    res.status(200).json({
      success: true,
      data: [
        { id: 1, name: 'Bob' },
        { id: 2, name: 'Ben' },
      ],
    });
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    console.log(id)
    res
      .status(200)
      .json({ success: true, data: `Return user with id ${id}` });
  }

  @Post()
  createUser(@Body() userData: CreateUserDto, @Res() res: Response) {
    console.log(userData);
    res.status(201).json({ success: true, data: userData });
  }
}
