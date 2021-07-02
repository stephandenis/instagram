import Skeleton from "react-loading-skeleton";
import usePhotos from "../hooks/use-photos";
import Post from "./post/Post";

const Timeline = () => {
  const { photos } = usePhotos();

  console.log(photos);
  return (
    <div className="container col-span-2">
      {!photos ? (
        <>
          <Skeleton count={4} width={640} height={300} className="mb-5" />
        </>
      ) : photos?.length > 0 ? (
        photos.map((content) => <Post key={content.docId} content={content} />)
      ) : (
        <p className="text-center text-2xl">Follow people to see photos!</p>
      )}
    </div>
  );
};

export default Timeline;
