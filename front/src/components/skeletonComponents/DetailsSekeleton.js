import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./styles.css";

export const DetailsSkeleton = () => {
  let width = window.innerWidth;

  return (
    <div className="details__skeleton-container">
      <Skeleton baseColor="#cecece" height={500} count={1} />
      <Skeleton baseColor="#cecece" height={500} count={1} />
    </div>
  );
};
