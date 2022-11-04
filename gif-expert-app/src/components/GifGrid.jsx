import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { LoadingComponent } from "./LoadingComponent";

export const GifGrid = ({ category }) => {
  const { images, loader } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loader && <LoadingComponent />}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
