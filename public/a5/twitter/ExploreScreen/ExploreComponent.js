import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return (`
            <div class="mt-2 d-flex flex-row justify-content-between">
                <div class="input-group">
                    <span class="input-group-text wd-img-round wd-white"><i class="fas fa-search"></i></span>
                    <input type="search" class="form-control wd-search-border  me-2"
                           placeholder="Search Twitter">
                </div>
                <div>
                    <span class="input-group-text wd-border-none wd-white">
                        <a href="settings.html"> <i class="fas fa-cog fa-2x text-primary"></i></a>
                    </span>
                </div>
            </div>

            <ul class="nav nav-tabs mt-2 flex-nowrap container-fluid">
                <li class="nav-item">
                    <a class="nav-link active text-nowrap" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="new.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>

            <!--Image-->
            <div class="card wd-border-none">
                <img src="../explore/starship.jpg" class="img-fluid mt-2">
                <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <h1 class="text-white">SpaceX's Starship</h1>
                </div>
            </div>
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

