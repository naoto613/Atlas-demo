import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { Authority } from '@prisma/client';

@InputType()
class WhereInput {
  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  authority?: Authority;
}

@ArgsType()
export class SearchUsersInput {
  @Field(() => WhereInput, { nullable: true })
  where: WhereInput;

  @Field(() => Number, { nullable: true })
  skip?: number;

  @Field(() => Number, { nullable: true })
  take?: number;
}
