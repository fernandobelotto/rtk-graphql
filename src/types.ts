export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  bio: string;
};

export type UserResponse = {
  user: User;
};
