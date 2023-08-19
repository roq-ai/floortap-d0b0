interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrative Staff'],
  customerRoles: ['Customer'],
  tenantRoles: ['Property Seller', 'Property Buyer', 'Real Estate Agent', 'Administrative Staff', 'Property Inspector'],
  tenantName: 'Organization',
  applicationName: 'Floortap',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
