import { BlogItem } from "@/common/components/blog";
import { useGetBlog } from "@/hooks";

export default function BlogShowWithImage({ params: { blogId } }: { params: { blogId: string } }) {
  const blog = useGetBlog(blogId);

  return <BlogItem blog={blog} showImage />
}
