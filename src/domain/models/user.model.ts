import { ObjectType } from '@nestjs/graphql';
import { User } from '../../infrastructure/prisma/@generated/prisma-nestjs-graphql/user/user.model';

@ObjectType()
export class UserModel extends User {}
