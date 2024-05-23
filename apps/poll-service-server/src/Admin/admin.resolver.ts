import * as graphql from "@nestjs/graphql";
import { QuestionCreateInputData } from "../admin/QuestionCreateInputData";
import { Question } from "../question/base/Question";
import { QuestionUpdateInputData } from "../admin/QuestionUpdateInputData";
import { AdminService } from "./admin.service";

export class AdminResolver {
  constructor(protected readonly service: AdminService) {}

  @graphql.Query(() => Question)
  async createQuestion(
    @graphql.Args()
    args: QuestionCreateInputData
  ): Promise<Question> {
    return this.service.createQuestion(args);
  }

  @graphql.Mutation(() => String)
  async DeleteQuestion(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.DeleteQuestion(args);
  }

  @graphql.Query(() => [QuestionCreateInputData])
  async GetQuestions(
    @graphql.Args()
    args: string
  ): Promise<QuestionCreateInputData[]> {
    return this.service.GetQuestions(args);
  }

  @graphql.Mutation(() => QuestionUpdateInputData)
  async UpdateQuestion(
    @graphql.Args()
    args: QuestionUpdateInputData
  ): Promise<QuestionUpdateInputData> {
    return this.service.UpdateQuestion(args);
  }
}
