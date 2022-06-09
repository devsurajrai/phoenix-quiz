import sign from "jwt-encode";
import { Response } from "miragejs";
import { v4 as uuid } from "uuid";

import { getCurrentDateTime, requiresAuth, userResponse } from "../utils";

export const signupHandler = function (schema, request) {
  const {
    username = "",
    firstName,
    lastName,
    dob = "",
    contact = "",
    email,
    password,
  } = JSON.parse(request.requestBody);
  try {
    const user = this.db.users.findBy({ username });
    if (user) {
      return new Response(
        422,
        {},
        {
          message: "username Already Exists.",
        }
      );
    }
    const id = uuid();
    const newUser = {
      id,
      username,
      password,
      firstName,
      lastName,
      dob,
      contact,
      email,
      createdAt: getCurrentDateTime(),
      updatedAt: getCurrentDateTime(),
      score: 0,
      quizPlayed: 0,
      recentlyPlayed: [],
      correctAnswered: 0,
      incorrectAnswered: 0,
      role: "PLAYER",
    };

    const createdUser = this.create("user", newUser);
    const encodedToken = sign({ username: newUser.username }, "easyPeasy");
    return new Response(
      201,
      {},
      {
        user: userResponse(createdUser.attrs),
        encodedToken,
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

export const loginHandler = function (schema, request) {
  const { email, password } = JSON.parse(request.requestBody);
  try {
    const user = this.db.users.findBy({ email });

    if (!user) {
      return new Response(
        404,
        {},
        {
          message:
            "The username you entered is not Registered. Not Found error",
        }
      );
    }
    if (password === user.password) {
      const encodedToken = sign({ username: user.username }, "easyPeasy");

      return new Response(
        201,
        {},
        {
          encodedToken,
          user: userResponse(user),
        }
      );
    }
    return new Response(
      401,
      {},
      {
        message:
          "The credentials you entered are invalid. Unauthorized access error.",
      }
    );
  } catch (error) {
    return new Response(
      500,
      {},
      {
        message: "something went wrong",
      }
    );
  }
};

export const getUserHandler = function (schema, request) {
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

    return new Response(200, {}, { user });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        message: "something went wrong",
      }
    );
  }
};

export const patchUserHandler = function (schema, request) {
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
    const {
      score,
      quizPlayed,
      recentlyPlayed,
      correctAnswered,
      incorrectAnswered,
    } = JSON.parse(request.requestBody);
    const reqBody = {
      score,
      quizPlayed,
      recentlyPlayed,
      correctAnswered,
      incorrectAnswered,
    };
    const updateObject = {};
    for (let [key, value] of Object.entries(reqBody)) {
      if (!isNaN(Number(value)))
        Object.assign(updateObject, { [key]: Number(value) });

      const oldRecentlyPlayed = [
        ...this.db.users.findBy({ username: user.username }).recentlyPlayed,
      ];

      if (key === "recentlyPlayed") {
        if (oldRecentlyPlayed.length === 3) {
          recentlyPlayed.unshift(oldRecentlyPlayed[1], oldRecentlyPlayed[2]);
        } else {
          recentlyPlayed.unshift(...oldRecentlyPlayed);
        }
        Object.assign(updateObject, { [key]: recentlyPlayed });
      }
    }
    const updatedUser = this.db.users.update(
      { username: user.username },
      updateObject
    );
    if (score !== undefined && score !== null && !isNaN(Number(score))) {
      const highscores = [...this.db.highscores];
      let presentUser = highscores.find((i) => i.username === user.username);

      if (score > highscores.find((user) => user.rank === 10).score) {
        if (presentUser !== undefined) {
          this.db.highscores.remove({ rank: presentUser.rank });
          if (presentUser.rank === 10 && highscores[9].score > score)
            this.create("highscore", {
              id: uuid(),
              rank: 10,
              username: user.username,
              score: score,
              userId: user.id, //need to check this later from functional point of view
            });
          else
            for (let i = presentUser.rank - 1; i >= 0; i--) {
              if (
                i != 0 &&
                score > highscores.find((user) => user.rank === i).score
              )
                this.db.highscores.update({ rank: i }, { rank: i + 1 });
              else {
                this.create("highscore", {
                  id: uuid(),
                  rank: i + 1,
                  username: user.username,
                  score: score,
                  userId: user.id, //need to check this later from functional point of view
                });
                break;
              }
            }
        } else {
          this.db.highscores.remove({ rank: 10 });
          for (let i = 9; i >= 0; i--) {
            if (
              i != 0 &&
              score > highscores.find((user) => user.rank === i).score
            )
              this.db.highscores.update({ rank: i }, { rank: i + 1 });
            else {
              this.create("highscore", {
                id: uuid(),
                rank: i + 1,
                username: user.username,
                score: score,
                userId: user.id, //need to check this later from functional point of view
              });
              break;
            }
          }
        }
      }
    }

    return new Response(200, {}, { user: updatedUser });
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
