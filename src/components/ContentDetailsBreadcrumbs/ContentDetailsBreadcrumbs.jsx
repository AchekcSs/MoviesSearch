import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router";

const ContentDetailsBreadcrumbs = ({ title, seasonNumber, id, contentType, isFavorites }) => {
  return (
    <section className="mb-8 md:mb-0">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
            {isFavorites ? (
              <Link to="/favorites">Favorites</Link>
            ) : (
              <Link to="/">Home</Link>
            )}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {seasonNumber && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={`/${contentType}/${id}`}>{title}</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage><span className="font-bold">Season {seasonNumber}:</span> {title}</BreadcrumbPage>
            </>
          )}
          {!seasonNumber && <BreadcrumbPage>{title}</BreadcrumbPage>}
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
};

export default ContentDetailsBreadcrumbs;
