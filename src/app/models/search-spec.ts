import { STATUS_TODO } from './todo-item';

export interface ISearchSpec {
  filter?: STATUS_TODO;
  text?: string;
}
