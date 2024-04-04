import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(['admin', 'employee', 'intern'], {
    message: 'Role must be one of the following: admin, employee, intern',
  })
  role: 'admin' | 'employee' | 'intern';
}
