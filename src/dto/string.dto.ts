import { IsString } from 'class-validator';

export class StringDTO {
  @IsString()
  str: string;
}
