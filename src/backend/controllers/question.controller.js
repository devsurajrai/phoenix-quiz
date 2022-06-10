import { Response } from "miragejs";

import { requiresAuth, shuffleArray } from "../utils";

export const getQuestionsHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        403,
        {},
        {
          message: "Auth Error",
        }
      );
    }
    const tags = request.queryParams?.tags?.split(",") ?? [];
    const lvl = request.queryParams?.lvl ?? "";
    const length = Number(request.queryParams?.length ?? 10);
    let respQuestions = [];
    for (let i of tags) {
      if (lvl !== "")
        respQuestions.push(
          ...this.db.questions.filter(
            (qs) => qs.tags.includes(i) && qs.level === lvl
          )
        );
      else
        respQuestions.push(
          ...this.db.questions.filter((qs) => qs.tags.includes(i))
        );
    }
    if (tags.length === 0)
      respQuestions =
        lvl === ""
          ? [...this.db.questions]
          : this.db.questions.filter((qs) => qs.level === lvl);
    respQuestions = shuffleArray(respQuestions).slice(-1 * length);
    return new Response(
      200,
      {},
      {
        questions: respQuestions,
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        message: error.message,
      }
    );
  }
};
