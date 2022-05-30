import { Field, ObjectType } from '@nestjs/graphql';
import { GraphQLErrorDetail } from './graphql-error-detail';

@ObjectType()
export class GraphQLErrorOutput {
  @Field(() => GraphQLErrorDetail, { nullable: true })
  errors?: GraphQLErrorDetail[];

  @Field(() => Object, { nullable: true })
  data?: object;
}
