import React from "react";
import Post from "./Post";
// eslint-disable-next-line no-unused-vars
import Link from "./Link";

function Feed() {
  const feedList = [
    {
      author: {
        name: "The Practical Dev",
        nickname: "ThePracticalDev",
        picture: "https://i.stack.imgur.com/zjUOL.jpg?s=64&g=1",
      },
      post: {
        description: "Learning React ? start small \n { author @dcbedita }",
        content: {
          type: "link",
          component: "link",
          arguments: [{ type: "url", content: "https://dev.io/" }],
        },
        lastUpdate: new Date(),
        coments: {
          count: 1,
          list: [
            {
              author: {
                name: "Diego Paiva",
                nickname: "_brpaiva",
                picture: "",
              },
            },
          ],
        },
        reposts: {
          count: 0,
          list: [],
        },
        favorite: {
          count: 0,
          list: [],
        },
      },
    },
  ];
  return (
    <div>
      {feedList.map((post) => {
        return <Post content={post} key={post} />;
      })}
    </div>
  );
}

export default Feed;
