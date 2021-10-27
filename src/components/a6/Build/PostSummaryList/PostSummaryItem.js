import React from "react";

const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "/images/reactjs.png"
                             }
                         }
) => {
    return (
        <>
            <li className="list-group-item fw-bold">
                <div className="d-flex flex-row justify-content-between">
                    <div className="p-2">
                        <span className="text-muted fw-normal"> {post.topic} </span>
                        <p className="mb-0">{post.userName} <i className="fas fa-check-circle"/>
                            <span className="text-muted fw-normal">- {post.time}</span></p>
                        {post.title}
                    </div>
                    <div className="p-2"><img src={post.image} width="90px" height="90px"/></div>
                </div>
            </li>
        </>
    );
}
export default PostSummaryItem;