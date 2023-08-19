import { PropertyInterface } from 'interfaces/property';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InterestInterface {
  id?: string;
  property_id: string;
  customer_id: string;
  date: any;
  created_at?: any;
  updated_at?: any;

  property?: PropertyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InterestGetQueryInterface extends GetQueryInterface {
  id?: string;
  property_id?: string;
  customer_id?: string;
}
