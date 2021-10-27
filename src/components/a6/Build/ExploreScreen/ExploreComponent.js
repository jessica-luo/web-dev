import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return (
        <>
            <div className="mt-2 d-flex flex-row justify-content-between">
                <div className="input-group">
                    <span className="input-group-text wd-img-round wd-white"><i
                        className="fas fa-search text-secondary"/></span>
                    <input type="search" className="form-control wd-search-border me-2"
                           placeholder="Search Twitter"/>
                </div>
                <div>
                     <span className="input-group-text wd-blk">
                        <a href="settings.html"> <i className="fas fa-cog fa-2x text-primary"/></a>
                    </span>
                </div>
            </div>

            <ul className="nav nav-tabs mt-2 flex-nowrap container-fluid mb-2">
                <li className="nav-item">
                    <a className="nav-link active text-nowrap" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="new.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>

            <div className="card wd-border-none">
                <img src="/images/starship.jpg" className="img-fluid"/>
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <h1 className="text-black">SpaceX's Starship</h1>
                </div>
            </div>
            <PostSummaryList/>
        </>
    );
}
export default ExploreComponent;

