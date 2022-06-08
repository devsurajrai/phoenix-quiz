import jwt_decode from 'jwt-decode';
import { Response } from 'miragejs';

export const requiresAuth = function (request) {
  const encodedToken = request.requestHeaders.authorization;
  if (encodedToken === null)
    return new Response(401, {}, { message: "Auth Error" });
  const decodedToken = jwt_decode(
    encodedToken,
    "easyPeasy"
  );
  if (decodedToken === null)
    return new Response(401, {}, { message: "Auth Error" });

  const user = this.db.users.findBy({ username: decodedToken.username });
  return user;
};

export const getCurrentDateTime = () => new Date().toISOString();

export const shuffleArray = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
export const userResponse = (user) => {
  const { password, updatedAt, ...userResp } = user;
  return userResp;
};
