/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { QuestionService } from "../question.service";
import { QuestionCreateInput } from "./QuestionCreateInput";
import { Question } from "./Question";
import { QuestionFindManyArgs } from "./QuestionFindManyArgs";
import { QuestionWhereUniqueInput } from "./QuestionWhereUniqueInput";
import { QuestionUpdateInput } from "./QuestionUpdateInput";
import { ChoiceFindManyArgs } from "../../choice/base/ChoiceFindManyArgs";
import { Choice } from "../../choice/base/Choice";
import { ChoiceWhereUniqueInput } from "../../choice/base/ChoiceWhereUniqueInput";
import { ResponseFindManyArgs } from "../../response/base/ResponseFindManyArgs";
import { Response } from "../../response/base/Response";
import { ResponseWhereUniqueInput } from "../../response/base/ResponseWhereUniqueInput";

export class QuestionControllerBase {
  constructor(protected readonly service: QuestionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Question })
  async createQuestion(
    @common.Body() data: QuestionCreateInput
  ): Promise<Question> {
    return await this.service.createQuestion({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Question] })
  @ApiNestedQuery(QuestionFindManyArgs)
  async questions(@common.Req() request: Request): Promise<Question[]> {
    const args = plainToClass(QuestionFindManyArgs, request.query);
    return this.service.questions({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Question })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async question(
    @common.Param() params: QuestionWhereUniqueInput
  ): Promise<Question | null> {
    const result = await this.service.question({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Question })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateQuestion(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() data: QuestionUpdateInput
  ): Promise<Question | null> {
    try {
      return await this.service.updateQuestion({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Question })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteQuestion(
    @common.Param() params: QuestionWhereUniqueInput
  ): Promise<Question | null> {
    try {
      return await this.service.deleteQuestion({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/choices")
  @ApiNestedQuery(ChoiceFindManyArgs)
  async findChoices(
    @common.Req() request: Request,
    @common.Param() params: QuestionWhereUniqueInput
  ): Promise<Choice[]> {
    const query = plainToClass(ChoiceFindManyArgs, request.query);
    const results = await this.service.findChoices(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        question: {
          select: {
            id: true,
          },
        },

        text: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/choices")
  async connectChoices(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() body: ChoiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      choices: {
        connect: body,
      },
    };
    await this.service.updateQuestion({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/choices")
  async updateChoices(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() body: ChoiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      choices: {
        set: body,
      },
    };
    await this.service.updateQuestion({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/choices")
  async disconnectChoices(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() body: ChoiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      choices: {
        disconnect: body,
      },
    };
    await this.service.updateQuestion({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/responses")
  @ApiNestedQuery(ResponseFindManyArgs)
  async findResponses(
    @common.Req() request: Request,
    @common.Param() params: QuestionWhereUniqueInput
  ): Promise<Response[]> {
    const query = plainToClass(ResponseFindManyArgs, request.query);
    const results = await this.service.findResponses(params.id, {
      ...query,
      select: {
        choice: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        question: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/responses")
  async connectResponses(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        connect: body,
      },
    };
    await this.service.updateQuestion({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/responses")
  async updateResponses(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        set: body,
      },
    };
    await this.service.updateQuestion({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/responses")
  async disconnectResponses(
    @common.Param() params: QuestionWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        disconnect: body,
      },
    };
    await this.service.updateQuestion({
      where: params,
      data,
      select: { id: true },
    });
  }
}
