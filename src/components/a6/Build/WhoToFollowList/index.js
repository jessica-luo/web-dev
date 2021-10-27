import React from "react";
import who from "./who.json"
import WhoToFollowListItem from
        "./WhoToFollowListItem";

const WhoToFollowList = () => {
    return (
        <>
            <div className="col d-none d-lg-block">
                <ul className="list-group mt-2">
                    <li className="list-group-item">
                        <span className="fw-bold">Who to follow</span>
                    </li>

                    {
                        who.map(who => {
                            return (
                                <WhoToFollowListItem who={who}/>
                            );
                        })
                    }

                </ul>
            </div>
        </>
    );
}
export default WhoToFollowList;