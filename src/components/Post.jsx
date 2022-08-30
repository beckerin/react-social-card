import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "./Link";
import { FaComment, FaHeart, FaEnvelope, FaRetweet } from "react-icons/fa";

function Post(props) {
  const content = props.content;
  const author = content.author;
  const post = content.post;
  const date = moment(post.lastUpdate).format("MMM DD");
  const [hasLink, setHasLink] = useState([]);

  useEffect(() => {
    const regexUrl =
      // eslint-disable-next-line no-useless-escape
      /(http|https)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/gim;
    setHasLink(regexUrl.exec(post.description));
  }, [post.description]);

  return (
    <div className="flex">
      <div className="content_left m-4 w-20">
        <img
          src={author.picture}
          className="rounded-full w-20"
          alt={`profile from ${author.name}`}
        />
      </div>
      <div className="content_right flex-row">
        <div className="content_title flex gap-2 mb-2">
          <a
            href={`htts://google.com/${author.nickname}`}
            className="font-bold"
          >
            {author.name}
          </a>
          <span className="text-gray-600">
            {"@" + author.nickname + " " + date}
          </span>
        </div>
        <div className="content_description mb-2">
          <span dangerouslySetInnerHTML={{ __html: post.description }}></span>
          {hasLink?.length > 0 ? <Link arguments={hasLink[0]} /> : ""}
        </div>
        <div className="content_footer mb-12 flex gap-8 text-lg text-gray-600 dark:text-gray-400">
          <button className="footer_coments flex gap-4">
            <FaComment size="24" />
            {post.coments.count}
          </button>
          <button className="footer_reposts flex gap-4">
            <FaRetweet size="24" />
            {post.reposts.count}
          </button>
          <button className="footer_favorite flex gap-4">
            <FaHeart size="24" />
            {post.favorite.count}
          </button>
          <button className="footer_send flex gap-4">
            <FaEnvelope size="24" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
