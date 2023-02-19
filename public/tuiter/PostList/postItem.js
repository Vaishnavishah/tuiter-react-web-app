const PostItem =  (post) => {
    return(`
        <div class="container d-flex mt-2">
               <!--user profile image -->
                <div class="col-1 pt-1">
                       <img src=${post.userImage}
                        class="rounded-circle wd-profile-img"/>
                </div>
                <div class="col-11 ms-2 me-2">
                        <div>
                            <span class="fw-bold text-white">
                                ${post.userName}
                                <i class="fa-solid fa-circle-check"></i>
                            </span>
                            <span class="text-muted"> @${post.userTag} &middot; ${post.time} </span>
                            <span class="float-end"> <i class="fa-solid fa-ellipsis"></i> </span>
                        </div>
                        <div class="pt-1">
                            <span class="text-white"> ${post.postText} </span>
                        </div>
                        <div class="pt-3 pb-3">
                            <div class="rounded-4 border border-light">
                                <div>
                                    <img src=${post.cardImage} class="card-img-top rounded-4">
                                </div>
                                ${
                                              post.cardTitle || post.cardText || post.cardLink
                                                ? `
                                <div class="border-top border-light ps-2 pt-2 pb-2 pe-2">
                                    <div class="pt-1 fw-bold text-white"> ${post.cardTitle} </div>
                                    <div class="text-muted"> ${post.cardText} </div>
                                    <a href=${post.cardLink} class="text-decoration-none text-muted">
                                            <i class="fa-solid fa-link"></i> ${post.cardLink}
                                    </a>
                                </div>
                                `
                                                : ``
                                            }

                            </div>
                        </div>
                        <div class="row pb-3 ps-2 text-muted">
                            <div class="col">
                                  <i class="fa-solid fa-comment"></i>

                                  <span class="text-muted ps-2">${post.comments}</span>
                            </div>
                            <div class="col">
                                  <i class="fa-solid fa-retweet"></i>
                                  <span class="text-muted ps-2">${post.retuits}</span>
                            </div>
                            <div class="col">
                                  <i class="fa-solid fa-heart"></i>
                                  <span class="text-muted ps-2">${post.likes}</span>
                            </div>
                            <div class="col">
                                  <i class="fa-solid fa-arrow-up-from-bracket"></i>
                            </div>
                        </div>
                </div>
        </div>
    `);
}

export default PostItem;