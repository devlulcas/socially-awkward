import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async findOneByUsername(username: string): Promise<User | null> {
    const user = await this.userModel.findOne({ username });

    return user;
  }

  async findOneById(id: string): Promise<User | null> {
    const user = await this.userModel.findById(id);

    return user;
  }

  async create(inputUser: CreateUserDto): Promise<User> {
    return this.userModel.create({
      username: inputUser.username,
      email: inputUser.email,
      password: inputUser.password.hashedValue,
    });
  }
}
