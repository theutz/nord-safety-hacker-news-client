export interface Story {
  id: number;
  title: string;
  type: 'story' | 'comment' | 'job' | 'poll' | 'pollopt';
  by: string;
  score: number;
  kids: number[];
  url: string;
  descendants: number;
  text: string;
}

export type Stories = Story[];