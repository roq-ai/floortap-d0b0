import { InspectionInterface } from 'interfaces/inspection';
import { InterestInterface } from 'interfaces/interest';
import { OfferInterface } from 'interfaces/offer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PropertyInterface {
  id?: string;
  title: string;
  location: string;
  price: number;
  size: number;
  seller_id?: string;
  buyer_id?: string;
  agent_id?: string;
  created_at?: any;
  updated_at?: any;
  inspection?: InspectionInterface[];
  interest?: InterestInterface[];
  offer?: OfferInterface[];
  user_property_seller_idTouser?: UserInterface;
  user_property_buyer_idTouser?: UserInterface;
  user_property_agent_idTouser?: UserInterface;
  _count?: {
    inspection?: number;
    interest?: number;
    offer?: number;
  };
}

export interface PropertyGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  location?: string;
  seller_id?: string;
  buyer_id?: string;
  agent_id?: string;
}
