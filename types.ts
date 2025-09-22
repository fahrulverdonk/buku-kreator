
export interface Creator {
  name: string;
  title: string;
  bio: string;
  avatar: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  tag: string;
  cover: string;
}
