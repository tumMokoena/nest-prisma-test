import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';

@Module({
  controllers: [UsersController],
  providers: []
})
export class UsersModule {}
