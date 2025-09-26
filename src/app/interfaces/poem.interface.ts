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
  author:string
  fontImage:string
}

export interface haikusMusicados{
  id: number,
  title:string,
  date: string,
  image: string,
  jp:string,
  jp2:string,
  jp3:string,
  romaji: string,
  romaji1: string,
  romaji2: string,
  verses1:string,
  verses2:string,
  verses3:string,
  verses:string,
  audio:string,
  author:string
  fontImage:string
}


export interface poemsVerses {
 transform: any;
  id:number;
  title: string;
  author: string;
  verses: string[];
  image:string
  background:string
  ilus:string
}







