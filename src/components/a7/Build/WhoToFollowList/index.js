import React from "react";
import {useSelector} from "react-redux";
import WhoToFollowListItem from
        "./WhoToFollowListItem";

const selectAll = (state) => state.who;

const WhoToFollowList = () => {
    const who = useSelector(selectAll);
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