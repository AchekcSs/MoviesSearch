import Logo from "@/components/Logo/Logo";
import Container from "@/components/Container/Container";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { memo } from "react";

const Footer = () => {
  return (
    <footer className={"bg-black text-white dark:bg-white dark:text-black"}>
      <Container className="flex items-center flex-col justify-between gap-6 py-6">
        <div className="w-full flex-col min-[440px]:flex-row flex items-center justify-between">
          <Logo />
          <nav>
            <Link to="/">
              <Button variant="link" className="text-lg text-current">
                Home
              </Button>
            </Link>
            <Link to="/favorites">
              <Button variant="link" className="text-lg text-current">
                Favorites
              </Button>
            </Link>
          </nav>
        </div>
        <Separator className="bg-current"/>
        <p className="text-center">© 2026 Movie Explorer. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default memo(Footer);
