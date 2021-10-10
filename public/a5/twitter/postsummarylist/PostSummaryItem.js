const PostSummaryItem = (post) => {
    return (`
     <li class="list-group-item fw-bold">
                    <div class="d-flex flex-row justify-content-between">
                        <div class="p-2">
                            <span class="text-muted fw-normal"> ${post.topic} </span>
                            <p class="mb-0">${post.userName} <i class="fas fa-check-circle"></i> 
                            <span class="text-muted fw-normal">- ${post.time}</span></p>
                            ${post.title}
                        </div>
                        <div class="p-2"><img src=${post.image} width="90px" height="90px"></div>
                    </div>
     </li>
    `);
}
export default PostSummaryItem;