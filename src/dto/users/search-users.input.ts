import { ArgsType, Field, InputType, Int } from '@nestjs/graphql';
import { Authority } from '@prisma/client';
import { Type } from 'class-transformer';
import * as Validator from 'class-validator';
import { Min, ValidateNested } from 'class-validator';

@InputType()
class SearchInput {
  @Field(() => String, { nullable: true })
  @Validator.IsEmail()
  email?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  @Validator.IsOptional()
  // @Validator.MinLength(8)
  @Min(1)
  test?: number;

  @Field(() => String, { nullable: true })
  authority?: Authority;
}

@ArgsType()
export class SearchUsersInput {
  @Field(() => SearchInput, { nullable: true })
  @ValidateNested()
  @Type(() => SearchInput)
  searchInput?: SearchInput;

  @Field(() => Number, { nullable: true })
  skip?: number;

  @Field(() => Number, { nullable: true })
  take?: number;
}
