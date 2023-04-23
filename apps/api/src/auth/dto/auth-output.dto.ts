import { Payload } from '../entities/payload.entity';

export class AuthOutputDto {
  payload: Payload;
  token: string;
}
