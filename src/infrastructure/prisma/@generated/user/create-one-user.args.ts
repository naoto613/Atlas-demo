import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserCreateInput } from './user-create.input';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneUserArgs {
  @Field(() => UserCreateInput, { nullable: false })
  @ValidateNested()
  data!: UserCreateInput;
}
