
export interface Page {
  title: string;
  content: string[];
  image?: string | null;
}

export interface Story {
  title: string;
  author: string;
  collection: string;
  pages: Page[];
}
