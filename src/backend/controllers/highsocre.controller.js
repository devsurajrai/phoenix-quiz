import { Response } from 'miragejs';

export const getHighscoresHandler = function () {
  try {
    return new Response(200, {}, { highscores: this.db.highscores });
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
