import posts from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
            <div class="col d-none d-lg-block">
            <ul class="list-group mt-2">
                
                ${
        posts.map(posts => {
            return (PostSummaryItem(posts));
        }).join('')
    }
                
            </ul>
        </div>
`);
}
export default PostSummaryList;