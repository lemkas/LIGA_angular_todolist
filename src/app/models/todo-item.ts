export interface TodoItem {
  id: string;
  status: STATUS_TODO;
  text: string;
}

export enum STATUS_TODO {
  usual = 'usual',
  important = 'important',
  done = 'done',
}
