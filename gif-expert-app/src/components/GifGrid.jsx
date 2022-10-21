import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { getGifApi } from "../helpers/getGifApi";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  

  const getImages = async () => {
      const getImages = await getGifApi(category);
      setImages(getImages);
  };

  useEffect(() => {
    
    getImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <>
      <h3>{ category }</h3>
      <div className="card-grid">
        { images.map( (image) => (
          <GifItem key={image.id}
          { ...image }
          />
        ))}
      </div>
    </>
  )
};
