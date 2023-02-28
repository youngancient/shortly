import Link from "../Link/Link";
import axios from "axios";
import { useEffect } from "react";
const LinkList = ({
  linkData,
  url,
  isSubmitted,
  setUrl,
  setIsSubmitted,
  setLinkData,
}) => {
  if (isSubmitted) {
    
    useEffect(() => {
      axios
        .get(`https://api.shrtco.de/v2/shorten?url=${url}`)
        .then((res) => {
          setLinkData([...linkData, res.data.result]);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
    setUrl("");
    setIsSubmitted(false);
  }
  return linkData.map((link, index) => (
    <>
      {linkData !== undefined ? (
        <Link
          prevLink={link.original_link}
          newLink={link.full_short_link}
          key={index}
        />
      ) : (
        <></>
      )}
    </>
  ));
};

export default LinkList;
