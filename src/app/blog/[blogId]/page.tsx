import { BlogItem } from "@/common/components/blog";
import { useGetBlog } from "@/hooks/useGetBlog";

export default function BlogShow({ params: { blogId } }: { params: { blogId: string } }) {
  const blog = useGetBlog(blogId);

  return (
    <BlogItem blog={blog} showContent />
  )
}
