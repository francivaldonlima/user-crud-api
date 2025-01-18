import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

// npm install @nestjs/mapped-types



export class UpdateUserDto extends PartialType(CreateUserDto) {}