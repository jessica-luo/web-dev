import React from "react";

const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: '/images/NASA.png',
                                     userName: 'NASA',
                                     handle: 'NASA',
                                 }
                             }
) => {
    return (
        <div>
            <li className="list-group-item fw-bold">
                <div className="d-flex flex-row justify-content-between">
                    <div className="text-nowrap">
                        <div className="d-flex flex-row">
                            <div className="p-2">
                                <img src={who.avatarIcon} className="rounded-circle" width="50px" height="50px"
                                     alt="..."/>
                            </div>
                            <div className="p-2">
                                {who.userName} <i className="fas fa-check-circle"/> <br/>
                                <span className="fw-normal">@{who.handle}</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <button type="button" className="btn btn-primary btn-sm wd-img-round wd-float-right">Follow
                        </button>
                    </div>
                </div>
            </li>
        </div>
    );
}
export default WhoToFollowListItem;