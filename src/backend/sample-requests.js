// This file provides sample uasge of all the api enpoints.
// you can play around with TwopiRest component by feeding this array to preset
// for eg:  <TwopiRest preset={sample_requests} />
const authToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNqdGdzaGl2YW0ifQ.vzWhvz8B8qnFvMDCZ5euP7Dfh0cZLbCcoLsMdaraFQY";
export const sample_requests = [
  {
    name: "user signup",
    req_type: "POST",
    base_url: "",
    url: "/user/signup",
    query_str: "",
    body: {
      firstName: "Shiv",
      lastName: "Raj",
      username: "sr11",
      dob: "11-12-2012",
      email: "Shiv@e.com",
      contact: "8057761545",
      password: "wah",
    },
    header: {},
  },
  {
    name: "user login",
    req_type: "POST",
    base_url: "",
    url: "/user/login",
    query_str: "",
    body: {
      username: "sr11",
      password: "wah",
    },
    header: {},
  },
  {
    name: "default user login",
    req_type: "POST",
    base_url: "",
    url: "/user/login",
    query_str: "",
    body: {
      username: "sjtgshivam",
      password: "acheDin",
    },
    header: {},
  },

  {
    name: "current user",
    req_type: "GET",
    base_url: "",
    url: "/user",
    query_str: "",
    body: {},
    header: {
      authorization: authToken,
    },
  },
  {
    name: "user",
    req_type: "PATCH",
    base_url: "",
    url: "/user",
    query_str: "",
    body: {
      score: 7,
      quizPlayed: 55,
      recentlyPlayed: [
        {
          category: {
            id: "12",
            title: "HTML",
            description: "this is category for html",
            image: "/gvh/ghvg",
            category_type: "PERSONAL",
            tags: ["HTML"],
            timer_detail: [
              { level: "EASY", time: 30 },
              { level: "MED", time: 70 },
              { level: "HARD", time: 90 },
            ],
          },
          level: "EASY",
        },
      ],
      correctAnswered: 77,
      incorrectAnswered: 88,
    },
    header: {
      authorization: authToken,
    },
  },
  {
    name: "qs",
    req_type: "GET",
    base_url: "",
    url: "/question",
    query_str: "?tags=HTML,JS&lvl=EASY&length=5",
    body: {},
    header: {
      authorization: authToken,
    },
  },
  {
    name: "highscore",
    req_type: "GET",
    base_url: "",
    url: "/highscore",
    query_str: "",
    body: {},
    header: {
      authorization: authToken,
    },
  },
  {
    name: "category",
    req_type: "GET",
    base_url: "",
    url: "/category",
    query_str: "",
    body: {},
    header: {
      authorization: authToken,
    },
  },
  // {
  //   name: "empty",
  //   req_type: "PATCH",
  //   base_url: "",
  //   url: "",
  //   query_str: "",
  //   body: {},
  //   header: {},
  // },
];
