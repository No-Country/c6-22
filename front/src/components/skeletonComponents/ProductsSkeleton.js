import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./styles.css";

export const ProductsSkeleton = () => {
  return (
    <div className="skeleton-products-container">
      <Skeleton baseColor="#cecece" count={1} height={472} width={250} />
      <Skeleton baseColor="#cecece" count={1} height={472} width={250} />
      <Skeleton baseColor="#cecece" count={1} height={472} width={250} />
      <Skeleton baseColor="#cecece" count={1} height={472} width={250} />
      <Skeleton baseColor="#cecece" count={1} height={472} width={250} />
      <Skeleton baseColor="#cecece" count={1} height={472} width={250} />
      <Skeleton baseColor="#cecece" count={1} height={472} width={250} />
      <Skeleton baseColor="#cecece" count={1} height={472} width={250} />
    </div>
  );
};
