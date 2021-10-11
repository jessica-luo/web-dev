import posts from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
            <div class="col d-none d-lg-block">
            <ul class="list-group">
                ${
        posts.map(post => {
            return (PostSummaryItem(post));
        }).join('')
    }
                
            </ul>
        </div>
`);
}
export default PostSummaryList;