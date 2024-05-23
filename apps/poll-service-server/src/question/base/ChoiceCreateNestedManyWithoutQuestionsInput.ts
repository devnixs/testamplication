/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ChoiceWhereUniqueInput } from "../../choice/base/ChoiceWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ChoiceCreateNestedManyWithoutQuestionsInput {
  @Field(() => [ChoiceWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ChoiceWhereUniqueInput],
  })
  connect?: Array<ChoiceWhereUniqueInput>;
}

export { ChoiceCreateNestedManyWithoutQuestionsInput as ChoiceCreateNestedManyWithoutQuestionsInput };
