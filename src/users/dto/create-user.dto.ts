import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { validate } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  name: string;

  @MinLength(6)
  password: string;
}

async function main() {
  const user = new CreateUserDto();
    user.email = 'example@example.com';
    user.name = 'John Doe';
    user.password = 'pas';

    const errors = await validate(user);
    if (errors.length > 0) {
      console.log(errors);
    } else {
      console.log('User is valid');
    }
}       

main();
// Output:
// [
//   {
//     target: CreateUserDto { email: '', name: 'John Doe', password: 'password' },

