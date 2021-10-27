import React from "react";

const NavigationSidebar = () => {
    return(
        <>
            <div className="list-group mt-2">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i></a>

                <a href="home.html" className="list-group-item list-group-item-action">
                    <div className="row">
                        <div className="col col-md-auto">
                            <i className="fas fa-home"/>
                        </div>
                        <div className="col-6">
                            <span className="d-none d-xl-block float-start">Home</span>
                        </div>
                    </div>
                </a>
                
                <a href="explore.html" className="list-group-item list-group-item-action active"
                   aria-current="true">
                    <div className="row">
                        <div className="col col-md-auto">
                            <i className="fas fa-hashtag"/>
                        </div>
                        <div className="col-6">
                            <span className="d-none d-xl-block float-start">Explore</span>
                        </div>
                    </div>
                </a>

                <a href="notifications.html" className="list-group-item list-group-item-action">
                    <div className="row">
                        <div className="col col-md-auto">
                            <i className="fas fa-bell"/>
                        </div>
                        <div className="col-6">
                            <span className="d-none d-xl-block float-start">Notifications</span>
                        </div>
                    </div>
                </a>


                <a href="messages.html" className="list-group-item list-group-item-action">
                    <div className="row">
                        <div className="col col-md-auto">
                            <i className="fas fa-envelope"/>
                        </div>
                        <div className="col-6">
                            <span className="d-none d-xl-block float-start">Messages</span>
                        </div>
                    </div>
                </a>

                <a href="bookmarks.html" className="list-group-item list-group-item-action">
                    <div className="row">
                        <div className="col col-md-auto">
                            <i className="fas fa-bookmark"/>
                        </div>
                        <div className="col-6">
                            <span className="d-none d-xl-block float-start">Bookmarks</span>
                        </div>
                    </div>
                </a>

                <a href="lists.html" className="list-group-item list-group-item-action">
                    <div className="row">
                        <div className="col col-md-auto">
                            <i className="fas fa-list"/>
                        </div>
                        <div className="col-6">
                            <span className="d-none d-xl-block float-start">Lists</span>
                        </div>
                    </div>
                </a>

                <a href="profile.html" className="list-group-item list-group-item-action">
                    <div className="row">
                        <div className="col col-md-auto">
                            <i className="fas fa-user"/>
                        </div>
                        <div className="col-6 col-md">
                            <span className="d-none d-xl-block float-start">Profile</span>
                        </div>
                    </div>
                </a>

                <a href="more.html" className="list-group-item list-group-item-action">
                    <div className="row">
                        <div className="col col-md-auto">
                            <i className="fas fa-ellipsis-h"/>
                        </div>
                        <div className="col-6">
                            <span className="d-none d-xl-block float-start">More</span>
                        </div>
                    </div>
                </a>
            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
</>
);
}
export default NavigationSidebar;

