export enum SlideType {
  Question, Slide,
}

export type Optional<T> = T | undefined;
type WithUUID<T> = T & { uuid: string };

export type SlideInfo = WithUUID<SlideInfoSlide | SlideInfoQuestion>;

export interface SlideInfoSlide {
  type: SlideType.Slide;
  title: string;
}

export interface SlideInfoQuestion {
  type: SlideType.Question;
  title: string;
  answers: Answer[];
}

export interface Answer {
  name: string;
  correct: boolean;
}
