export const validateEmail = (email: string) => {
  let error = '';

  if (!email) {
    error = 'Email is required';
  } else if (!/^[^@\s]+@[^@\s.]+\.[^@.\s]+$/.test(email)) {
    error = 'Email is invalid';
  }
  return error;
};

export const validatePassword = (
  password: string,
  passwordToCompare = null
) => {
  let error = '';
  if (!password) {
    error = 'Password is required';
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/.test(password)
  ) {
    error =
      'Password should have at least 5 characters, one letter, one capital letter, one number';
  } else if (passwordToCompare !== null && password !== passwordToCompare) {
    error = 'Passwords do not match';
  }
  return error;
};
