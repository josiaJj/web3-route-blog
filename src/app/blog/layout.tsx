import { BlogMenu } from "@/common/components/blog";

export default function BlogLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="dashboard">
      <BlogMenu />
      {children}
    </div>
  )
}
