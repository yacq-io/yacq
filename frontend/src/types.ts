export enum SlideType {
    Question, Slide
}

export type SlideInfo = SlideInfoSlide & SlideInfoQuestion;

interface SlideInfoSlide {
    type: SlideType.Slide;
    title: string;
}

interface SlideInfoQuestion {
    type: SlideType.Question;
    title: string;
    answers: string[];
}
