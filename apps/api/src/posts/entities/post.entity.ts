import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { v4 as uuid } from 'uuid';

@Schema({ timestamps: true })
export class Post {
  @Prop({ default: uuid })
  _id: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  authorId: User;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);

export type PostDocument = HydratedDocument<Post>;
