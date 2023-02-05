export interface ICategory {
  id: number;
  title: string;
}

export interface IAlbum {
  id: number;
  author: string;
  preview: string;
  title: string;
  category: string;
  amount: number;
  views: string;
  likes: number;
  comments: number;
  date: Date;
}

export interface ICategoryRequest {
  id: number;
  likes: number;
  page: number;
}
