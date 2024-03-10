import Link from "next/link"
import Image from "next/image"

import { Blog } from "@/common/utils/contants"

type BlogItemProps = {
  blog: Blog,
  showImage?: boolean,
  showContent?: boolean
}

export function BlogItem({ blog, showImage, showContent }: BlogItemProps) {
  return (
    <Link href={`/blog/${blog.id}`}>
      <div className="w-full hover:bg-purple-800 mx-auto p-5 max-w-[800px] bg-yellow-500 my-2">
        <p className="text-center">
          <span className="font-bold">ID</span>: {blog.id}
        </p>
        <p className="text-center">
          {blog.title}
        </p>
        {showContent && (
          <>
            <p className="text-center">{blog.content}</p>
            <Link href={`/blog/${blog.id}/image`} className="text-center my-2 text-white underline font-bold">
              Show image
            </Link>
          </>
        )}
        {showImage && (
          <Image
            src={blog.img}
            alt="Image"
            height={500}
            width={500}
            className="block"
          />
        )}
      </div>
    </Link >
  )
}
