import PostSummaryList
   from "../PostSummaryList/index.js";


const navItems = [
  {
    link: "#",
    title: "For You",
    active: true,
  },
  {
    link: "#",
    title: "Trending",
    active: false,
  },
  {
    link: "#",
    title: "New",
    active: false,
  },
  {
    link: "#",
    title: "Sports",
    active: false,
  },
  {
    link: "#",
    title: "Entertainment",
    active: false,
  },
];

const ExploreComponent = () => {
    return(`
            <div class="row d-flex align-items-center">
                            <div class="col-11 search-parent">
                                <i class="fas fa-search search-icon"></i>
                                <input
                                        aria-label="search"
                                        class="form-control override-color rounded-pill override-pill search-bar"
                                        placeholder="Search Tuiter"
                                        style = "padding-left: 7%"
                                        type="search"
                                />

                            </div>
                            <div class="col-1">
                                <a href="explore-settings.html"><i class="fa fa-cog fs-4"></i></a>
                                    </div>
                        </div>
           <ul class="nav mt-2 mb-2 nav-tabs">

                      ${navItems
                                  .map(
                                    (item) => `<li class="nav-item">
                                    <a href=${item.link} class=${`"nav-link ${
                                      item.active ? `active` : ``
                                    }"`}>${item.title}</a>
                                  </li>`
                                  )
                                  .join("")}

           </ul>
           <div class="card">
                                   <img class="card-img-top" src="../explore_a4/starship.jpg">
                                   <div class="card-img-overlay card-inverse d-flex flex-column justify-content-end">
                                       <h4 class="text-white text-bold">
                                           SpaceX's Starship
                                       </h4>
                                   </div>
                               </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

