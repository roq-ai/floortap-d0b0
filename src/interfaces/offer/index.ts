import { PropertyInterface } from 'interfaces/property';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OfferInterface {
  id?: string;
  property_id: string;
  buyer_id: string;
  price: number;
  status: string;
  date: any;
  created_at?: any;
  updated_at?: any;

  property?: PropertyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface OfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  property_id?: string;
  buyer_id?: string;
  status?: string;
}
