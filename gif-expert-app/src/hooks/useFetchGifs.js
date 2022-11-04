import { useEffect, useState } from "react";
import { getGifApi } from "../helpers/getGifApi";

export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(true);
    
  const getImages = async () => {
      const getImages = await getGifApi(category);
      setImages(getImages);
      setTimeout(() => {
        setLoader(false);
      }, 0.5);
  };

  useEffect(() => {
    
    getImages();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return {
    images,
    loader
  }


};
