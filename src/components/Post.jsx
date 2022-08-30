import React from "react";

function Post(props) {
  const content = props.content;
  const author = content.author;
  const post = content.post;

  const postDateFormated = (value) => {
    const date = new Date(value);
    return `${date.getMonth} / ${date.getDay}`;
  };

  return (
    <div className="">
      <div className="content_left">
        <img src={author.picture} alt={`profile from ${author.name}`} />
      </div>
      <div className="content_right">
        <div className="content_title">
          <span> {author.name} </span>
          <a href={`htts://google.com/${author.nickname}`}>
            @{author.nickname}
          </a>
          <span> {postDateFormated(post.lastUpdate)} </span>
        </div>
        <div className="content_description">
          <span> {post.description} </span>
          {post.content ? (
            <post.content.component arguments={post.content.arguments} />
          ) : (
            ""
          )}
        </div>
        <div className="content_footer">
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
