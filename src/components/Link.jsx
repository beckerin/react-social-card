import React, { useEffect, useState } from "react";
import axios from "axios";

function Link(props) {
  const args = props.arguments;
  const url = args.find((x) => x.type === "url").content;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getXMLString(url).then((data) => {
      const metas = [].slice.call(data.getElementsByTagName("meta"));
      const results = [];
      metas.map((item) =>
        item.childNodes.forEach((a) =>
          a.nodeName !== "#text" &&
          a.nodeName !== "#comment" &&
          a.nodeName !== "script"
            ? results.push(a)
            : ""
        )
      );

      setTitle(getIncludesName(results, "title").textContent);
      setDescription(getIncludesName(results, "og:description").textContent);
      setImage(getIncludesName(results, "og:image").textContent);
      console.log(getIncludesName(results, "og:image"));
    });
  }, [url]);
  function getIncludesName(list, target) {
    let result = [];
    result = list.filter((node) => node.nodeName.includes(target));
    if (!result.Length > 0)
      list.map((node) => {
        if (node.nodeName.includes("meta") && node.innerHTML.includes(target)) {
          console.log(node.name);
        }
        return null;
      });
    return result;
  }

  async function getXMLString(target) {
    let responseXML = "";
    await axios.get(target).then((response) => {
      if (response.status === 200) {
        responseXML = new DOMParser().parseFromString(
          response.data,
          "text/xml"
        );
      }
    });
    return responseXML;
  }
  return (
    <div>
      {title} {description} {image}
    </div>
  );
}

export default Link;
