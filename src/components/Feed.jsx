import React from "react";
import Post from "./Post";

function Feed() {
  const feedList = [
    {
      id: 1,
      author: {
        name: "The Practical Dev",
        nickname: "ThePracticalDev",
        picture: "https://i.stack.imgur.com/zjUOL.jpg?s=64&g=1",
      },
      post: {
        description: "Learning React ? start small <br> { author @dcbedita }",
        lastUpdate: "2022-09-10",
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
    {
      id: 4,
      author: {
        name: "The Practical Dev",
        nickname: "ThePracticalDev",
        picture: "https://i.stack.imgur.com/zjUOL.jpg?s=64&g=1",
      },
      post: {
        description:
          "Learning React ? start small <br> { author @dcbedita } <br> https://paivadiego.com.br/",
        lastUpdate: "2022-09-10",
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
    {
      id: 3,
      author: {
        name: "The Practical Dev",
        nickname: "ThePracticalDev",
        picture: "https://i.stack.imgur.com/zjUOL.jpg?s=64&g=1",
      },
      post: {
        description:
          "Learning React ? start small <br> { author @dcbedita } <br> https://dev.to/codenameone/open-source-bait-and-switch-1g34",
        lastUpdate: "2022-09-10",
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
    {
      id: 2,
      author: {
        name: "The Practical Dev",
        nickname: "ThePracticalDev",
        picture: "https://i.stack.imgur.com/zjUOL.jpg?s=64&g=1",
      },
      post: {
        description:
          "Learning React ? start small <br> { author @dcbedita } <br> https://dev.to/aurelkurtula",
        lastUpdate: "2022-09-10",
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
        return <Post content={post} key={post.id} />;
      })}
    </div>
  );
}

export default Feed;
