export class CreateUserDto {
  name: string;
  role: 'admin' | 'employee' | 'intern';
}
