export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  permissions: Array<string>;
  active: boolean;
}
