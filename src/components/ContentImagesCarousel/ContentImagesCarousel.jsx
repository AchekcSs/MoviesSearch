import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TMDB_POSTER_URL } from "@/constants/tmdb";
import { Card, CardContent } from "@/components/ui/card";

const ContentImagesCarousel = ({ images, setSelectedImageIndex }) => {
  return (
    <Carousel opts={{ align: "start" }} className="w-full xl:w-[90%] mb-30 mx-auto">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image.file_path} className={`basis-1/1 md:basis-1/2 lg:basis-1/3 ${images.length === 1 && "basis-1/1 md:basis-1/1 lg:basis-1/1"} ${images.length === 2 && "basis-1/1 md:basis-1/2 lg:basis-1/2"}`} >
            <Card className="p-0">
              <CardContent className="p-0 flex items-center justify-center">
                <img src={`${TMDB_POSTER_URL}/${image.file_path}`} alt="" style={{ aspectRatio: image.aspect_ratio }} className="rounded w-full object-cover cursor-pointer transition-transform hover:scale-[1.02]" onClick={() => setSelectedImageIndex(index)}/>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden xl:inline-flex"/>
      <CarouselNext className="hidden xl:inline-flex"/>
    </Carousel>
  );
};

export default ContentImagesCarousel;
