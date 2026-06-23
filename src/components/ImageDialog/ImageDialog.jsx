import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { TMDB_BACKDROP_URL } from "@/constants/tmdb";
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TypographyH3 from "@/components/Typography/TypographyH3/TypographyH3";

const ImageDialog = ({ images, selectedImageIndex, setSelectedImageIndex }) => {
  const [loaded, setLoaded] = useState(false);

  const currentImage = selectedImageIndex !== null ? images[selectedImageIndex] : null;

  const nextImage = () => {
    console.log("NEXT IMAGE")
    setSelectedImageIndex((prev) => {
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  const previousImage = () => {
    setSelectedImageIndex((prev) => {
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  useEffect(() => {
    setLoaded(false);
  }, [selectedImageIndex]);

  useEffect(() => {
    if (selectedImageIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") nextImage();

      if (event.key === "ArrowLeft") previousImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImageIndex, images.length]);

  return (
    <Dialog
      open={selectedImageIndex !== null}
      onOpenChange={(open) => {
        if (!open) {
          setSelectedImageIndex(null);
        }
      }}
    >
      <DialogContent className="w-full xl:max-w-[60vw] xl:max-h-[70vh] p-0 flex items-center justify-center before:content-[''] before:w-full before:h-30 before:absolute before:bottom-0 before:left-0 before:bg-linear-to-t before:from-black before:to-transparent overflow-hidden [&>button:last-child]:bg-transparent [&>button:last-child]:text-white">
        <Button type="button" className="absolute left-5 md:left-10 bg-black hover:bg-black/60" onClick={previousImage}>
          <ChevronLeft className="text-white" />
        </Button>
        <DialogTitle className="sr-only">Image Preview</DialogTitle>
        {!loaded && <Spinner className="size-15 absolute" />}
        {selectedImageIndex !== null && currentImage && (
          <img
            src={`${TMDB_BACKDROP_URL}${currentImage.file_path}`}
            alt=""
            className={` w-full h-full object-contain rounded-lg transition-opacity duration-200 ${loaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setLoaded(true)}
          />
        )}
        <TypographyH3 className="absolute bottom-5 md:bottom-10 text-white">{selectedImageIndex + 1} / {images.length}</TypographyH3>
        <Button type="button" className="absolute right-5 md:right-10 bg-black hover:bg-black/60" onClick={nextImage}>
          <ChevronRight className="text-white"/>
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
