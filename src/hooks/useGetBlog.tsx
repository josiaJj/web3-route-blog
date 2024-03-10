import { redirect } from "next/navigation";
import { Blog, blogMocks } from "@/common/utils/contants";

export function useGetBlog(blogId: Blog["id"]) {
  const currentBlog = blogMocks.find(blog => blog.id === blogId);

  if (!currentBlog) {
    redirect("/404");
  }

  return currentBlog;
}
