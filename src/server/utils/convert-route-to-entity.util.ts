const mapping: Record<string, string> = {
  inspections: 'inspection',
  interests: 'interest',
  offers: 'offer',
  organizations: 'organization',
  properties: 'property',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
