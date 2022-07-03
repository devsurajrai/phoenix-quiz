export const signupFormHandlers = (dispatchSignupForm) => {
  const handleFormFirstName = (e) => {
    dispatchSignupForm({ type: "SET_FIRST_NAME", payload: e.target.value });
  };
  const handleFormLastName = (e) => {
    dispatchSignupForm({ type: "SET_LAST_NAME", payload: e.target.value });
  };
  const handleFormEmail = (e) => {
    dispatchSignupForm({ type: "SET_EMAIL", payload: e.target.value });
  };
  const handleFormPassword = (e) => {
    dispatchSignupForm({ type: "SET_PASSWORD", payload: e.target.value });
  };
  const handleFormConfirmPassword = (e) => {
    dispatchSignupForm({
      type: "SET_CONFIRM_PASSWORD",
      payload: e.target.value,
    });
  };

  const handleCreateAccountBtn = (
    e,
    dispatch,
    createUser,
    signupFormData,
    setError
  ) => {
    const { firstName, lastName, email, password, confirmPassword } =
      signupFormData;
    e.preventDefault();
    if (!firstName) {
      setError("Please enter firstname");
    } else if (!lastName) {
      setError("Please enter lastname");
    } else if (!email || !email.includes("@") || !email.includes(".com")) {
      setError("Please correct email");
    } else if (!password) {
      setError("Please enter password");
    } else if (!confirmPassword) {
      setError("Please enter password");
    } else if (password !== confirmPassword) {
      setError("Passwords does not match");
    } else {
      setError("");
      dispatch(createUser({ firstName, lastName, email, password }));
    }
  };
  return {
    handleFormFirstName,
    handleFormLastName,
    handleFormEmail,
    handleFormPassword,
    handleFormConfirmPassword,
    handleCreateAccountBtn,
  };
};
