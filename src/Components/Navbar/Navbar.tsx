import { useEffect, useState } from "react";
import Logo from "../../assets/images/logo_black.png";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface CourseCategory {
  title: string;
  description: string;
}

const courseCategories: CourseCategory[] = [
  {
    title: "Web Development",
    description: "Courses on building and maintaining websites.",
  },
  {
    title: "Data Science",
    description: "Learn data analysis, machine learning, and more.",
  },
  {
    title: "Design",
    description: "Courses on graphic design, UX/UI, and creative skills.",
  },
  {
    title: "Marketing",
    description: "Learn digital marketing, SEO, and social media strategies.",
  },
  {
    title: "Business",
    description: "Courses on entrepreneurship, management, and finance.",
  },
  {
    title: "Programming",
    description: "Courses on various programming languages and techniques.",
  },
  {
    title: "Photography",
    description: "Learn about photography techniques and equipment.",
  },
  {
    title: "Music",
    description: "Courses on music theory, instruments, and production.",
  },
  {
    title: "Personal Development",
    description: "Courses on self-improvement, productivity, and wellness.",
  },
];

const NavListMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const renderItems = courseCategories.map(({ title, description }, index) => (
    <MenuItem
      key={index}
      className="flex items-center gap-3 rounded-lg"
      color="blue-gray"
    >
      <Link
        to={`/courses/${title.toLowerCase().replace(/ /g, "-")}`}
        className="flex w-full"
      >
        <div>
          <Typography variant="h6" className="text-sm font-bold">
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </Link>
    </MenuItem>
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
            >
              Categories
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList>
          <ul className="grid grid-cols-3 outline-none gap-y-2 outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
};

const NavList: React.FC = () => {
  return (
    <List className="p-0 mt-4 mb-6 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography as="a" variant="small" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          My Courses
        </ListItem>
      </Typography>
      <NavListMenu />
    </List>
  );
};

const NavbarWithMegaMenu: React.FC = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Navbar className="px-4 py-2 mx-auto shadow-none">
      <div className="flex items-center justify-between text-blue-gray-900">
        <img src={Logo} alt="neXademy" className="w-40" />
        <div className="hidden w-full max-w-md mx-auto lg:block">
          <div className="relative">
            <div className="w-full">
              <Input label="Search" icon={<IoSearchOutline />} />
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Link to="/login">
            <Button
              variant="text"
              size="sm"
              color="blue-gray"
              className="rounded-full"
            >
              Log In
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="gradient" size="sm" className="rounded-full">
              Sign In
            </Button>
          </Link>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="w-6 h-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="w-6 h-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex items-center w-full gap-2 flex-nowrap lg:hidden">
          <Link to="/login">
            <Button variant="outlined" size="sm" color="blue-gray">
              Log In
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="gradient" size="sm">
              Sign In
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarWithMegaMenu;
