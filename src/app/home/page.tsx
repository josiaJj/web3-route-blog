import { BlogItem } from "@/common/components/blog"
import { blogMocks } from "@/common/utils/contants"

export default function Home() {
  return (
    <div>
      {blogMocks.map(blog => <BlogItem key={blog.id} blog={blog} />)}
    </div>
  )
}
