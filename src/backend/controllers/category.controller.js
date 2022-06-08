import { Response } from 'miragejs';

export const getCategoriesHandler = function () {
  try {
    return new Response(
      200,
      {},
      {
        categories: this.db.categories.filter(
          (category) => category.category_type === "FEATURED"
        ),
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
