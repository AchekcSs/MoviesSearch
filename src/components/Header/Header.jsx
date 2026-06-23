import { memo } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router";
import Logo from "@/components/Logo/Logo";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, NavigationMenuItem } from "../ui/navigation-menu";

const Header = () => {
  const currentURL = window.location.pathname;

  const underlineStyles = "border-b-2 border-foreground";

  return (
    <header className={`max-w-360 w-full my-0 mx-auto flex items-center justify-between py-6 px-6 rounded-md sticky bg-background top-0 z-10`}>
      <Logo className="text-foreground" />
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem className={currentURL === "/" && underlineStyles}>
            <NavigationMenuLink asChild className="text-lg p-3">
              <Link to="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className={currentURL === "/favorites" && underlineStyles}>
            <NavigationMenuLink asChild className="text-lg p-3">
              <Link to="/favorites">Favorites</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ModeToggle />
    </header>
  );
};

export default memo(Header);
