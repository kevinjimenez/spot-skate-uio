import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Province extends Document {
  @Prop()
  name: string;

  @Prop()
  code: string;
}

export const ProvinceSchema = SchemaFactory.createForClass(Province);
