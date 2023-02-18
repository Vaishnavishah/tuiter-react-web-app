const WhoToFollowListItem = (who) => {
  return `
    <div class="list-group-item d-flex justify-content-between align-items-center">
              <div class="d-flex flex-row align-items-center gap-1">
                <img style = "border-radius: 50%; width: 45px; height: 45px;"
                  src=${who.avatarIcon}
                  alt=${who.userName}
                />
                <div>
                  <div class="fw-bold text-wrap">
                    ${who.userName}
                    <i class="fa fa-check-circle"></i>
                  </div>
                  @${who.handle}
                </div>
              </div>
              <button class="btn btn-primary btn-sm rounded-pill">
                Follow
              </button>
            </div>
    `;
};

export default WhoToFollowListItem;