 export interface Quote {
  id: number;
  author_id?: string;
  text?:string;
  author?:string;
  tags?:string[];
  }


  export interface Book{
    id: number;
    title: string;
    author: string;
    year: number;
    isRead: boolean;
  }
  