export const logout = (navigate, dispatch, setAuthToDefault) => {
  localStorage.clear("token");
  dispatch(setAuthToDefault());
  navigate("/");
};
