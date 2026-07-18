import ContentLoader from "react-content-loader";

const Skeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={295}
      height={380}
      viewBox="0 0 295 380"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="15" ry="15" width="295" height="295" />
      <rect x="216" y="317" rx="10" ry="10" width="75" height="51" />
      <rect x="0" y="356" rx="10" ry="10" width="120" height="40" />
      <rect x="49" y="366" rx="0" ry="0" width="7" height="0" />
      <rect x="0" y="310" rx="10" ry="10" width="200" height="35" />
    </ContentLoader>
  );
};

export default Skeleton;
