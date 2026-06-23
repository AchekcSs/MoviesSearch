import { useState } from "react";
import ContentImagesCarousel from "../ContentImagesCarousel/ContentImagesCarousel";
import ImageDialog from "@/components/ImageDialog/ImageDialog";

const ContentImagesSection = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  return (
    <section>
      <ContentImagesCarousel images={images} setSelectedImageIndex={setSelectedImageIndex} />
      <ImageDialog images={images} selectedImageIndex={selectedImageIndex} setSelectedImageIndex={setSelectedImageIndex} />
    </section>
  );
};

export default ContentImagesSection;
