import React from 'react'


interface BlogPostPageProps {
    params: {
        postId: string
    }
}
/* TODO: Handle the blog stuff here */
const BlogPostPage = ({ params: { postId } }: BlogPostPageProps) => {
    return (
        <div></div>
    )
}


BlogPostPage.displayName = "BlogPostPage"


export default BlogPostPage;
