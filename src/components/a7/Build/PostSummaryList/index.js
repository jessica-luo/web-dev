import React from "react";
import posts from "./posts.json"
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (
        <>
            <ul className="list-group mb-2">
                {
                    posts.map(post => {
                        return (
                            <PostSummaryItem post={post}/>
                        );
                    })
                }

            </ul>
        </>
    );
}
export default PostSummaryList;