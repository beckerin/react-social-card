import React from "react";
import moment from "moment";
import Link from "./Link";

function Post(props) {
  const content = props.content;
  const author = content.author;
  const post = content.post;
  const date = moment(post.lastUpdate).format("MMM DD");

  const Components = {
    link: Link,
  };
  const ContentComponent = Components[post.content.component];

  return (
    <div className="flex">
      <div className="content_left m-4">
        <img
          src={author.picture}
          className="rounded-full"
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
          {post.content ? (
            <ContentComponent arguments={post.content.arguments} />
          ) : (
            ""
          )}
        </div>
        <div className="content_footer mb-2">
          <button className="footer_coments">
            <img src="" alt="" />
            {post.coments.count}
          </button>
          <button className="footer_reposts">
            <img src="" alt="" />
            {post.reposts.count}
          </button>
          <button className="footer_favorite">
            <img src="" alt="" />
            {post.favorite.count}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
