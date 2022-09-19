export type PostsType = {
  id: number;
  title: string;
  content: string;
  author: {
    name: string;
    role: string;
  };
  date: Date;
};
