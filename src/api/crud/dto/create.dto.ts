import { IsNotEmpty } from 'class-validator';

export class CreateDTO {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public location: string;

  @IsNotEmpty()
  public phone: string;
}
