export interface Entrada {
  title: string;
  date?: string;
  location?: string;
  datetime?: string;
  poems?: (string | PoemaCorto)[];
  verses?: string[];
}

export interface PoemaCorto {
  id: number;
  text: string[];
  lang?: string;
}

export interface BlogData {
  date: string;
  title: string;
  project: string;
  framework: string;
  entries: Entrada[];
}
