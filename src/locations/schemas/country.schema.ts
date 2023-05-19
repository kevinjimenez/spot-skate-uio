import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Country extends Document {
  @Prop()
  name: string;

  @Prop()
  code: string;
}

export const CountrySchema = SchemaFactory.createForClass(Country);
