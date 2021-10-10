const NavigationSidebar = () => {
    return(`
            <div class="list-group mt-2">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
                <a href="home.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col col-md-auto">
                            <i class="fas fa-home"></i>
                        </div>
                        <div class="col-6">
                            <span class="d-none d-xl-block float-start">Home</span>
                        </div>
                    </div>
                </a>
                
                <a href="explore.html" class="list-group-item list-group-item-action active"
                   aria-current="true">
                    <div class="row">
                        <div class="col col-md-auto">
                            <i class="fas fa-hashtag"></i>
                        </div>
                        <div class="col-6">
                            <span class="d-none d-xl-block float-start">Explore</span>
                        </div>
                    </div>
                </a>

                <a href="notifications.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col col-md-auto">
                            <i class="fas fa-bell"></i>
                        </div>
                        <div class="col-6">
                            <span class="d-none d-xl-block float-start">Notifications</span>
                        </div>
                    </div>
                </a>


                <a href="messages.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col col-md-auto">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="col-6">
                            <span class="d-none d-xl-block float-start">Messages</span>
                        </div>
                    </div>
                </a>

                <a href="bookmarks.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col col-md-auto">
                            <i class="fas fa-bookmark"></i>
                        </div>
                        <div class="col-6">
                            <span class="d-none d-xl-block float-start">Bookmarks</span>
                        </div>
                    </div>
                </a>

                <a href="lists.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col col-md-auto">
                            <i class="fas fa-list"></i>
                        </div>
                        <div class="col-6">
                            <span class="d-none d-xl-block float-start">Lists</span>
                        </div>
                    </div>
                </a>

                <a href="profile.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col col-md-auto">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="col-6 col-md">
                            <span class="d-none d-xl-block float-start">Profile</span>
                        </div>
                    </div>
                </a>

                <a href="more.html" class="list-group-item list-group-item-action">
                    <div class="row">
                        <div class="col col-md-auto">
                            <i class="fas fa-ellipsis-h"></i>
                        </div>
                        <div class="col-6">
                            <span class="d-none d-xl-block float-start">More</span>
                        </div>
                    </div>
                </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;

