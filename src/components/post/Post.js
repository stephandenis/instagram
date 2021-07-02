// import { useRef } from "react";
import PropTypes from "prop-types";
import Header from "./Header";

const Post = ({ content }) => {
  return (
    //components:
    // header, image, actions (like & comment icons), footer, comments

    <div className="rounded col-span-4 border border-gray-primary mb-16 bg-white">
      <Header username={content.username} />
    </div>
  );
};

export default Post;

Post.propTypes = {
  content: PropTypes.shape({
    username: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    docId: PropTypes.string.isRequired,
    userLikedPhoto: PropTypes.bool.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.array.isRequired,
    dateCreated: PropTypes.number.isRequired,
  }),
};
