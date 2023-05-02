import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuid } from 'uuid';

@Schema({ timestamps: true })
export class Post {
  @Prop({ default: uuid })
  _id: string;

  @Prop({
    required: true,
    type: {
      _id: String,
      username: String,
      avatar: String,
    },
  })
  author: {
    _id: string;
    username: string;
    avatar: string;
  };

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  body: string;

  @Prop({ default: 0 })
  likes: number;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);

export type PostDocument = HydratedDocument<Post>;
