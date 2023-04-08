export enum SlideType {
  Question, Slide,
}

export type Optional<T> = T | undefined;

export type SlideInfo = SlideInfoSlide | SlideInfoQuestion;

export interface SlideInfoSlide {
  type: SlideType.Slide;
  title: string;
}

export interface SlideInfoQuestion {
  type: SlideType.Question;
  title: string;
  answers: string[];
}
