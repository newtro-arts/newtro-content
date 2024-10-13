import { useEffect, useState } from "react";
import { debounce } from "lodash";

const useTaggedProfile = (
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
) => {
  const [isTagging, setIsTagging] = useState(false);
  const [taggedText, setTaggedText] = useState("");
  const [taggedProfile, setTaggedProfile] = useState<any>(null);

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
    const lookupProfile = debounce(async (address: string) => {
      try {
        const response = await fetch(`/api/profile?address=${address}`);
        if (response.ok) {
          // Profile found, you can handle the response data here if needed
          const data = await response.json();
          setTaggedProfile(data?.zoraProfile);
        } else {
          console.log("No profile found for address:", address);
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
