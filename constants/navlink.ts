export type NavItem = {
  path: string;
  name: string;
  to: string;
  /** true → navigates to another page (next/link); otherwise scrolls to a section on home */
  route?: boolean;
};

const Navlinks: NavItem[] = [
  {
    path: "/",
    name: "/",
    to: "top",
  },
  {
    path: "/work",
    name: "work",
    to: "work",
  },
  {
    path: "/projects",
    name: "projects",
    to: "projects",
  },
  {
    path: "/writing",
    name: "writing",
    to: "writing",
    route: true,
  },
];

export default Navlinks;
