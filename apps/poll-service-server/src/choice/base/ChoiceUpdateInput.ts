/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QuestionWhereUniqueInput } from "../../question/base/QuestionWhereUniqueInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ResponseUpdateManyWithoutChoicesInput } from "./ResponseUpdateManyWithoutChoicesInput";

@InputType()
class ChoiceUpdateInput {
  @ApiProperty({
    required: false,
    type: () => QuestionWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QuestionWhereUniqueInput)
  @IsOptional()
  @Field(() => QuestionWhereUniqueInput, {
    nullable: true,
  })
  question?: QuestionWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ResponseUpdateManyWithoutChoicesInput,
  })
  @ValidateNested()
  @Type(() => ResponseUpdateManyWithoutChoicesInput)
  @IsOptional()
  @Field(() => ResponseUpdateManyWithoutChoicesInput, {
    nullable: true,
  })
  responses?: ResponseUpdateManyWithoutChoicesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  text?: string | null;
}

export { ChoiceUpdateInput as ChoiceUpdateInput };
