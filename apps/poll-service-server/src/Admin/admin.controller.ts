import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AdminService } from "./admin.service";
import { QuestionUpdateInputData } from "../admin/QuestionUpdateInputData";
import { Question } from "../question/base/Question";
import { QuestionCreateInputData } from "../admin/QuestionCreateInputData";

@swagger.ApiTags("admins")
@common.Controller("admins")
export class AdminController {
  constructor(protected readonly service: AdminService) {}

  @common.Post("/create-question")
  @swagger.ApiOkResponse({
    type: Question
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async createQuestion(
    @common.Body()
    body: QuestionUpdateInputData
  ): Promise<Question> {
        return this.service.createQuestion(body);
      }

  @common.Delete("/question/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteQuestion(
    @common.Body()
    body: QuestionUpdateInputData
  ): Promise<string> {
        return this.service.DeleteQuestion(body);
      }

  @common.Get("/questions")
  @swagger.ApiOkResponse({
    type: QuestionCreateInputData
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetQuestions(
    @common.Body()
    body: QuestionUpdateInputData
  ): Promise<QuestionCreateInputData[]> {
        return this.service.GetQuestions(body);
      }

  @common.Put("/question/:id")
  @swagger.ApiOkResponse({
    type: QuestionUpdateInputData
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateQuestion(
    @common.Body()
    body: QuestionUpdateInputData
  ): Promise<QuestionUpdateInputData> {
        return this.service.UpdateQuestion(body);
      }
}
