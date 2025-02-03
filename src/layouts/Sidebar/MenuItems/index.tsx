import appPath from "../../../utils/pathConstant";
type MenuItem = {
  id: number;
  link: string;
  title: string;
};

export const menuItems: MenuItem[] = [
  { id: 1, link: appPath.DASHBOARD, title: "Dashboard" },
  { id: 2, link: appPath.USER, title: "User" },
  { id: 3, link: appPath.PROPERTIES, title: "Properties" },
  { id: 4, link: appPath.CHAT, title: "Chat" },
  { id: 5, link: appPath.MAINTENANCE, title: "Maintenance" },
  { id: 6, link: appPath.CUSTOMER_SUPPORT, title: "Customer Support" },
  { id: 7, link: appPath.FAQS, title: "FAQs" },
  { id: 8, link: appPath.TERMS_OF_SERVICE, title: "Terms of Service" },
  { id: 9, link: appPath.PRIVACY_POLICY, title: "Privacy Policy" },
];
