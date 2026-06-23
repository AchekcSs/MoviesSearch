import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import TypographyH1 from "@/components/Typography/TypographyH1/TypographyH1";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Container className="grow">
        <main>
          <section className="flex flex-col items-center gap-8 mt-[60%]">
            <TypographyH1 className="text-5xl text-center">
              404
              <br />
              Page not found :(
            </TypographyH1>
            <Link to="/">
              <Button>Go To Home</Button>
            </Link>
          </section>
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
