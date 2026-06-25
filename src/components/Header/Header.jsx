import { memo, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router";
import Logo from "@/components/Logo/Logo";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, NavigationMenuItem } from "../ui/navigation-menu";
import { Menu, X as Close } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentURL = window.location.pathname;
  const underlineStyles = "border-b-2 border-foreground";

  return (
    <header className="max-w-360 w-full my-0 mx-auto flex items-center justify-between py-6 px-6 rounded-md sticky bg-background top-0 z-10">
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
      <div className="flex items-center gap-4">
        <div className="hidden md:block">
          <ModeToggle />
        </div>
        <Button
          className="px-3 h-12.5 md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <Close className="h-6 w-6 size-6" /> : <Menu className="h-6 w-6 size-6" />}
        </Button>
      </div>
      {isMobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-10 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className="absolute left-0 right-0 top-full border border-border bg-background py-4 px-6 md:hidden flex justify-between items-center z-20"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className={`text-lg font-medium ${currentURL === "/" ? "text-foreground" : "text-muted-foreground"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/favorites"
                className={`text-lg font-medium ${currentURL === "/favorites" ? "text-foreground" : "text-muted-foreground"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Favorites
              </Link>
            </div>
            <div>
              <ModeToggle />
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default memo(Header);
