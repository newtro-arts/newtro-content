import { useEffect, useState } from "react";
import { debounce } from "lodash";

const useTaggedProfile = () => {
  const [isTagging, setIsTagging] = useState(false);
  const [taggedText, setTaggedText] = useState("");
  const [taggedProfile, setTaggedProfile] = useState<any>(null);
  console.log("SWEETS TAGGED TEXT", taggedText);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    console.log("SWEETS TEXT", text);
    const atIndex = text.lastIndexOf("@");
    console.log("SWEETS atIndex", atIndex);
    if (atIndex !== -1) {
      const substring = text.slice(atIndex + 1);
      console.log("SWEETS substring", substring);
      const spaceIndex = substring.indexOf(" ");
      console.log("SWEETS spaceIndex", spaceIndex);
      if (spaceIndex === -1) {
        console.log("SWEETS substring", substring);
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
    const lookupProfile = debounce(async (address: string) => {
      try {
        const response = await fetch(`/api/profile?address=${address}`);
        if (response.ok) {
          // Profile found, you can handle the response data here if needed
          const data = await response.json();
          console.log("SWEETS data", data);
          setTaggedProfile(data?.zoraProfile);
        }
      } catch (error) {
        console.error("Error looking up profile:", error);
      } finally {
        setIsTagging(false);
      }
    }, 200);

    if (isTagging && taggedText) {
      lookupProfile(taggedText);
    }
  }, [isTagging, taggedText]);

  return { handleChange, isTagging, taggedProfile };
};

export default useTaggedProfile;
