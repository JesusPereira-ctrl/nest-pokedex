import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {
  // isString, MinLength 1
  @IsString()
  @MinLength(1)
  name: string;

  // isInt, isPositive, Min 1
  @IsInt()
  @IsPositive()
  @Min(1)
  no: number;
}
