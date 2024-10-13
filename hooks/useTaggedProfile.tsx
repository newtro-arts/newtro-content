import { useEffect, useState } from "react";

const useTaggedProfile = (
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
) => {
  const [isTagging, setIsTagging] = useState(false);
  const [taggedText, setTaggedText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    handleInputChange(e);
    const text = e.target.value;
    const atIndex = text.lastIndexOf("@");
    if (atIndex !== -1) {
      const substring = text.slice(atIndex + 1);
      const spaceIndex = substring.indexOf(" ");
      if (spaceIndex === -1) {
        setIsTagging(true);
        setTaggedText(substring);
      } else {
        setIsTagging(false);
        setTaggedText("");
      }
    } else {
      setIsTagging(false);
      setTaggedText("");
    }
  };

  useEffect(() => {
    if (isTagging && taggedText) {
      // Here you would implement the logic to search for a profile match
      // For now, we'll just simulate a delay
      const timer = setTimeout(() => {
        setIsTagging(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isTagging, taggedText]);

  return { handleChange, isTagging };
};

export default useTaggedProfile;
