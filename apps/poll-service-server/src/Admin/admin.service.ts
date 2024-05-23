import { Injectable } from "@nestjs/common";
import { QuestionCreateInputData } from "../admin/QuestionCreateInputData";
import { Question } from "../question/base/Question";
import { QuestionUpdateInputData } from "../admin/QuestionUpdateInputData";

@Injectable()
export class AdminService {
  constructor() {}
  async createQuestion(args: QuestionCreateInputData): Promise<Question> {
    throw new Error("Not implemented");
  }
  async DeleteQuestion(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetQuestions(args: string): Promise<QuestionCreateInputData[]> {
    throw new Error("Not implemented");
  }
  async UpdateQuestion(args: QuestionUpdateInputData): Promise<QuestionUpdateInputData> {
    throw new Error("Not implemented");
  }
}
