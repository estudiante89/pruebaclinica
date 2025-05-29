
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class User {
  @Prop({ required: true }) name: string;
  @Prop({ required: true, unique: true }) email: string;
  @Prop({ required: true }) password: string;
  @Prop({ required: true }) role: 'patient' | 'doctor' | 'admin';

  @Prop() birthDate?: Date;
  @Prop() documentId?: string;
  @Prop() specialty?: string;
  @Prop() license?: string;
  @Prop() clinicRoom?: string;
  @Prop() healthInsurance?: string;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
