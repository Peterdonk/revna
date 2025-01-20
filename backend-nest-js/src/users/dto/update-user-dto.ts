import {
  IsString,
  IsEmail,
  IsArray,
  IsBoolean,
  IsOptional,
} from '@nestjs/class-validator';

export class UpdateUserDto {
  @IsString()
  name?: string;

  @IsEmail()
  email?: string;

  @IsString()
  role?: string;

  @IsArray()
  @IsString({ each: true })
  permissions?: string[];

  @IsBoolean()
  @IsOptional()
  active?: boolean;
}
