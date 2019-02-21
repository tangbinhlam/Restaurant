import { GenderEnum } from '../../enum';
import { Role } from '../user';

export interface User {
  identifiant: string;
  email: string;
  name: string;
  conntry: string;
  gender: GenderEnum;
  role: Role;
  company?: string;
  createAt?: Date;
  updateAt?: Date;
}
