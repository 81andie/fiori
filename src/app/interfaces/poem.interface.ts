export interface PoeticCollection {
  date: string;
  title: string;
  project: string;
  framework: string;
  entries: Entry[];
}

export interface Entry {
  title: string;
  date?: string;
  datetime?: string;
  location?: string;
  poems?: (string | Poem)[];
  verses?: string[];
}

export interface Poem {
  id: number;
  text: string[];
  lang?: string;
}
