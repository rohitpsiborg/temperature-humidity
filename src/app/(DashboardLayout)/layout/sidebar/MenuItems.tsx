import { IoHomeOutline } from "react-icons/io5";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IoHomeOutline,
    href: "/",
  },
  {
    id: uniqueId(),
    title: "Device Management",
    icon: IoHomeOutline,
    href: "/device-management",
  },
  {
    id: uniqueId(),
    title: "Patient Management",
    icon: IoHomeOutline,
    href: "/patient-management",
  },
  {
    id: uniqueId(),
    title: "Doctor Management",
    icon: IoHomeOutline,
    href: "/doctor-management",
  },
  {
    id: uniqueId(),
    title: "Org Management",
    icon: IoHomeOutline,
    href: "/organization-management",
  },
  {
    id: uniqueId(),
    title: "Admin Management",
    icon: IoHomeOutline,
    href: "/admin-management",
  },
  {
    id: uniqueId(),
    title: "Analytics",
    icon: IoHomeOutline,
    href: "/analytics",
  },
  {
    id: uniqueId(),
    title: "Profile",
    icon: IoHomeOutline,
    href: "/profile",
  },
];

export default Menuitems;
