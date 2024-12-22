type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: Partial<User>): User {
  const update: User = {
    name: '',
    surname: '',
    email: '',
    password: '',
  };
  return { ...update, ...initialValues };
}

console.log(
  createOrUpdateUser({
    email: 'user@mail.com',
    password: 'password123',
  })
);
