export const login = (
  dispatch,
  loginUser,
  event,
  email,
  password,
  setError
) => {
  event.preventDefault();
  if (!email && !password) {
    setError("Please check your email and password");
  } else if (!email || !email.includes("@") || !email.includes(".com")) {
    setError("Please check your email");
  } else if (!password) {
    setError("Please check your password");
  } else {
    setError("");
    dispatch(loginUser({ email, password }));
  }
};
export const loginAsGuest = (dispatch, loginUser, event, email, password) => {
  event.preventDefault();

  dispatch(loginUser({ email, password }));
};
