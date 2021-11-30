import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import TweetList from "../TweetList";
import WhatsHappening from "../WhatsHappening";

const HomeScreen = () => {
    return (
        <div className="container flex-nowrap">
            <div className="row flex-nowrap">
                <div className="col-2">
                    <NavigationSidebar active="home"/>
                </div>
                <div className="col-auto col-lg-6"
                     style={{"position": "relative"}}>
                    <WhatsHappening/>
                    <TweetList/>
                </div>
                <div className="col d-none d-lg-block">
                    <PostSummaryList title="What's happening"/>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;