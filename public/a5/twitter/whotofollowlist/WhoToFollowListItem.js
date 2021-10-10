const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item fw-bold">
                    <div class="d-flex flex-row justify-content-between">
                        <div class="text-nowrap">
                            <div class="d-flex flex-row">
                                <div class="p-2">
                                    <img src=${who.avatarIcon} class="rounded-circle" width="50px" height="50px" alt="...">
                                </div>
                                <div class="p-2">
                                    ${who.userName} <i class="fas fa-check-circle"></i> <br/>
                                    <span class="fw-normal">@${who.handle}</span>
                                </div>
                            </div>
                        </div>
                        <div class="p-2">
                            <button type="button" class="btn btn-primary btn-sm wd-img-round wd-float-right">Follow
                            </button>
                        </div>
                    </div>
                </li>
    `);
}
export default WhoToFollowListItem;