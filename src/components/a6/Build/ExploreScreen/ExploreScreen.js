import React from "react";
import NavigationSidebar from "../NavigationSidebar"
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "./ExploreComponent";

const ExploreScreen = () => {
    return (
        <>
            <div className="container flex-nowrap">
                <div className="row flex-nowrap">
                    <div className="col-2">
                        <NavigationSidebar/>
                    </div>
                    <div className="col-auto col-lg-6">
                        <ExploreComponent/>
                    </div>
                    <div className="col d-none d-lg-block">
                        <WhoToFollowList/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default ExploreScreen;


