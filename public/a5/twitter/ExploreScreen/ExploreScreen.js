import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

(function ($) {
    $('#wd-explore').append(`
<div class="container flex-nowrap">
    <div class="row flex-nowrap">
        
        <div class="col-2">
            ${NavigationSidebar()}
        </div>
        
        <div class="col-auto col-lg-6 mb-2">
            ${ExploreComponent()}
        </div>

        <div class="col d-none d-lg-block">
            ${WhoToFollowList()}
        </div>
        
    </div>
</div>
    `);
})($);

