import { useChatProvider } from "@/providers/ChatProvider";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const TaggedAccount = () => {
  const { taggedProfile } = useChatProvider();

  return (
    <div className="mr-2">
      {taggedProfile ? (
        <Image
          src={taggedProfile.avatar}
          alt={taggedProfile.username}
          width={24}
          height={24}
          className="rounded-full"
          blurDataURL={taggedProfile.avatar}
        />
      ) : (
        <Loader2 className="h-4 w-4 animate-spin text-green-fourth" />
      )}
    </div>
  );
};

export default TaggedAccount;
