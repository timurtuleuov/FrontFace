export interface Response {
  id: number;
  userId: number;
  contentType: string;
  data: string[];
  prediction: number[];
  responseDate: string;
}