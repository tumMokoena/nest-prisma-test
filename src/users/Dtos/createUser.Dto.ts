import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({required : true})
  @IsNotEmpty()
  username: string;

  @ApiProperty({required : true})
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({required : true})
  @IsNotEmpty()
  password: string;
}
