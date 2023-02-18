const PostSummaryItem = (exploreItem) =>
  `        <a
                href="#"
                class="list-group-item list-group-item-action d-flex flex-row justify-content-between align-items-center"
              >
                <div class="d-flex flex-column">
                  <div class="text-muted">${exploreItem.topic}</div>
                  <div>
                    <span class="fw-bold">${exploreItem.userName}</span>
                    <i class="fa fa-check-circle"></i>
                    ${
                      exploreItem.time
                        ? `<span class="text-muted">~</span>
                    <span class="text-muted">${exploreItem.time}</span>`
                        : ""
                    }
                  </div>
                  <div class="fw-bold">
                    ${exploreItem.title}
                  </div>
                  ${
                    exploreItem.tweets
                      ? `<div class="text-muted">${exploreItem.tweets} Tuits</div>`
                      : ""
                  }
                </div>
                <div class = "col-2">
                <img
                  style = ""
                  class="img-fluid rounded"
                  src=${exploreItem.image}
                  alt=${exploreItem.userName}
                />
                </div>
              </a>
    `;

export default PostSummaryItem;