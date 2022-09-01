import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const HomeSkeleton = () => {
  let width = window.innerWidth;

  return (
    <Skeleton baseColor="#cecece" count={4} height={width > 636 ? 320 : 394} />
  );
};
