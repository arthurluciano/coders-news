import { useRouter } from "next/router";
import { ReactNode, useCallback } from "react";
import { Post } from "../pages";

interface PostCardProps {
  post: Post;
  children: ReactNode;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const router = useRouter();

  const handlePostClick = useCallback(() => {
    router.push(`/post/${post.id}`);
  }, [])

  return (
    <div className="w-[27.75rem]" onClick={handlePostClick}>
      <img className="w-full h-60 object-cover rounded-[1rem] cursor-pointer mb-[1.25rem]" alt="Post thumbnail" src={post.thumbnail} />
      <h3 className="font-bold mb-[0.625rem] text-2xl">{post.title}</h3>
      <span className="text-lg">{post.description}</span>
    </div>
  );
}
