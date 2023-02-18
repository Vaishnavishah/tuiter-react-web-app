const navItems = [
  {
    link: "#",
    title: "Home",
    icon: "fa fa-home",
    active: false,
  },
  {
    link: "#",
    title: "Explore",
    icon: "fa fa-hashtag",
    active: true,
  },
  {
    link: "#",
    title: "Notifications",
    icon: "fa fa-bell",
    active: false,
  },
  {
    link: "#",
    title: "Messages",
    icon: "fa fa-envelope",
    active: false,
  },
  {
    link: "#",
    title: "Bookmarks",
    icon: "fa fa-bookmark",
    active: false,
  },
  {
      link: "#",
      title: "Lists",
      icon: "fa fa-list",
      active: false,
    },
    {
        link: "#",
        title: "Profiles",
        icon: "fa fa-user",
        active: false,
     },
     {
         link: "#",
         title: "More",
         icon: "fa fa-circle",
         active: false,
      },
];

const NavigationSidebar = () => {
 return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->



                               ${navItems.map(
                                          (item) => `<a href=${item.link}  class = ${`"list-group-item ${
                                          item.active ? `active` : ``
                                          }"`}>
                                          <i class = "${item.icon}"></i>
                                          ${item.title}
                                          </a>`
                               ).join("")}



   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;




