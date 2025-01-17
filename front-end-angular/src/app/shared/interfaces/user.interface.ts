export interface User {
  id?: string;
  name: string;
  email: string;
  role: string;
  permissions: Array<string>;
  active: boolean;
}
