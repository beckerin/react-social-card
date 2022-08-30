import React, { useEffect, useState } from "react";
import axios from "axios";

function Link(props) {
  const args = props.arguments;
  const url = args.find((x) => x.type === "url").content;
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    let title = "";
    let desc = "";
    getXMLString(url).then((data) => {
      title = getTitle(data);
      desc = getDescription(data);
    });
    setTitle(title);
    setDescription(desc);
  }, [url]);

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

  function getTitle(target) {
    return target.getElementsByTagName("title")[0].childNodes[0];
  }
  function getDescription(target) {
    return target.getElementsByName("description")[0].content || "";
  }

  return <div>{title}</div>;
}

export default Link;
