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

export type Repository = {
  url: string;
  name: string;
  id: string;
};


export type GetRepositoriesResponse = {
  user: {
    repositories: {
      nodes: Repository[]
    }
  }
}