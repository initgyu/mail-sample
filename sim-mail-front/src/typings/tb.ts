export interface IMail {
  id: number;
  path: string;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  time: string;
  title: string;
  displayDescription: string;
  type: string;
  isImportant: boolean;
  isStar: boolean;
  group: string;
  isUnread: boolean;
  description: string;
}
