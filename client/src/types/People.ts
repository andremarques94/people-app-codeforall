import { Company } from "./Company";

export interface People {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  picture: string;
  company?: Company | undefined;
}
