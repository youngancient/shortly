import Link from "../Link/Link";
import axios from "axios";
import { useEffect } from "react";
import { v4 as uuid } from "uuid";
const LinkList = ({
  linkData,
  url,
  isSubmitted,
  setUrl,
  setIsSubmitted,
  setLinkData,
}) => {

  useEffect(() => {
    if (isSubmitted) {
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then((res) => {
          setLinkData([...linkData, res.data.result]);
          console.log(res)
        })
        .catch((err) => {
          console.log(err);
        });
    }
    setUrl("");
    setIsSubmitted(false);
  }, [isSubmitted]);
  return linkData.map((link, index) => (
    <>
      {linkData !== undefined ? (
        <Link
          prevLink={link.original_link}
          newLink={link.full_short_link}
          key={link.code}
        />
      ) : (
        <></>
      )}
    </>
  ));
};

export default LinkList;
