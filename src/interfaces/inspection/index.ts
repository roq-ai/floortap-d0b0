import { PropertyInterface } from 'interfaces/property';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface InspectionInterface {
  id?: string;
  property_id: string;
  inspector_id: string;
  report: string;
  date: any;
  created_at?: any;
  updated_at?: any;

  property?: PropertyInterface;
  user?: UserInterface;
  _count?: {};
}

export interface InspectionGetQueryInterface extends GetQueryInterface {
  id?: string;
  property_id?: string;
  inspector_id?: string;
  report?: string;
}
