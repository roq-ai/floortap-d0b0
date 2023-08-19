import axios from 'axios';
import queryString from 'query-string';
import { InspectionInterface, InspectionGetQueryInterface } from 'interfaces/inspection';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getInspections = async (
  query?: InspectionGetQueryInterface,
): Promise<PaginatedInterface<InspectionInterface>> => {
  const response = await axios.get('/api/inspections', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createInspection = async (inspection: InspectionInterface) => {
  const response = await axios.post('/api/inspections', inspection);
  return response.data;
};

export const updateInspectionById = async (id: string, inspection: InspectionInterface) => {
  const response = await axios.put(`/api/inspections/${id}`, inspection);
  return response.data;
};

export const getInspectionById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/inspections/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteInspectionById = async (id: string) => {
  const response = await axios.delete(`/api/inspections/${id}`);
  return response.data;
};
