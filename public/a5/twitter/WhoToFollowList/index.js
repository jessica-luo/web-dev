import who from "./who.js"
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
            <div class="col d-none d-lg-block">
            <ul class="list-group mt-2">
                <li class="list-group-item">
                    <span class="fw-bold">Who to follow</span>
                </li>
                
                ${
        who.map(who => {
            return (WhoToFollowListItem(who));
        }).join('')
    }
                
            </ul>
        </div>
`);
}
export default WhoToFollowList;