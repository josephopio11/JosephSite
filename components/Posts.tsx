import { getSortedPostsData } from "@/lib/posts"
import ListItem from "./ListItem"

const Posts = () => {
    const posts = getSortedPostsData()
    return (
        <div className="prose prose-xl mx-auto">
            <div className="border-b-2">
                <h2 className="text-4xl font-bold dark:text-white/90">Blog</h2>
            </div>
            <div className="dark:text-slate-100">
                <ul className="w-full">
                    {posts.map(post => (
                        <ListItem key={post.id} post={post} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Posts