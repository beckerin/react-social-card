import React, { useEffect, useState } from "react";
import axios from "axios";

function Link(props) {
  const args = props.arguments;
  const url = args.find((x) => x.type === "url").content;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [off, setOff] = useState(false);

  useEffect(() => {
    getXMLString(url).then((data) => {
      if (data !== null) {
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

        setTitle(getIncludesName(results, "title"));
        setDescription(getIncludesName(results, "description"));
        setImage(getIncludesName(results, "image"));
      } else {
        setOff(true);
      }
    });
  }, [url]);
  function getIncludesName(list, target) {
    let result = [];
    let parser = new DOMParser();
    result.push(
      list.filter((node) => node.nodeName.includes(target))[0]?.textContent
    );
    result.pop(undefined);
    if (!result.Length > 0)
      list.map((node) => {
        if (node.nodeName.includes("meta")) {
          let unit = parser.parseFromString(node.innerHTML, "text/html");
          let stamp = unit.firstChild?.firstChild?.firstChild;
          if (
            stamp != null &&
            stamp !== undefined &&
            stamp?.name !== undefined &&
            stamp?.name !== "" &&
            stamp?.name.includes(target)
          ) {
            result.push(stamp.content);
          }
        }
        return null;
      });
    return result[0];
  }

  async function getXMLString(target) {
    let responseXML = "";
    await axios
      .get(target)
      .then((response) => {
        if (response.status === 200) {
          responseXML = new DOMParser().parseFromString(
            response.data,
            "text/xml"
          );
        }
      })
      .catch((ex) => {
        console.info(ex);
        responseXML = null;
      });
    return responseXML;
  }
  if (off) {
    return "";
  } else {
    return (
      <div className="block rounded-xl border-gray-800 shadow-xl my-4 mr-4">
        <div className="image">
          <img
            src={image}
            className="object-contain rounded-tl-lg rounded-tr-lg"
            alt={`header from foreign site`}
          />
        </div>
        <div className="content px-4 py-2">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mb-8">
            {description}
          </p>
        </div>
      </div>
    );
  }
}

export default Link;
