import { type } from "os";


type textTiming = {
  id: number;
  speaker: string;
  text: string;
  enterTime: number;
  exitTime: number;
};







type textItem = {
  id: number;
  speaker: string;
  text: string;
}

  
  type DispatchType = (args: ArticleAction) => ArticleAction

