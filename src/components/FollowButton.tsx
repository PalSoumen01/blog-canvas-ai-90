import { useState } from "react";
import { Button } from "@/components/ui/button";
import { UserPlus, UserCheck } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface FollowButtonProps {
  authorName: string;
}

const FollowButton = ({ authorName }: FollowButtonProps) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    toast.success(
      isFollowing ? `Unfollowed ${authorName}` : `Following ${authorName}`,
      {
        description: isFollowing
          ? "You will no longer see updates"
          : "You'll see their latest posts",
      }
    );
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        onClick={handleFollow}
        variant={isFollowing ? "outline" : "default"}
        size="sm"
        className="gap-2"
      >
        {isFollowing ? (
          <>
            <UserCheck className="w-4 h-4" />
            Following
          </>
        ) : (
          <>
            <UserPlus className="w-4 h-4" />
            Follow
          </>
        )}
      </Button>
    </motion.div>
  );
};

export default FollowButton;
