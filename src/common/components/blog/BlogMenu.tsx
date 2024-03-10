import { blogMocks } from "@/common/utils/contants"
import { BlogItem } from "./BlogItem";

export function BlogMenu() {
  return (
    <div className="w-[300px] bg-gray-600 overflow-y-auto" style={{ height: "calc(100vh - 100px)" }}>
      {blogMocks.map(blog => <BlogItem key={blog.id} blog={blog} />)}
    </div>
  )
}
