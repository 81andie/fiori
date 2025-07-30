export interface poem {
  id: number,
  date: string,
  img: string,
  jp:string,
  jp2:string,
  jp3:string,
  romaji: string,
  romaji1: string,
  romaji2: string,
  es: string,
  es1: string,
  es2: string
}

export interface haikusMusicados{
  id: number,
  title:string,
  date: string,
  img: string,
  jp:string,
  jp2:string,
  jp3:string,
  romaji: string,
  romaji1: string,
  romaji2: string,
  es: string,
  es1: string,
  es2: string,
  audio:string
}


export interface poemsVerses {
  id:number,
  title: string;
  author: string;
  verses: string[];
  image:string
  ilus:string
}







