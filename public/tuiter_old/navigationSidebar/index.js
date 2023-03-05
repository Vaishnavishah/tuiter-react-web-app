const navItems = [
  {
    link: "../HomeScreen/index.html",
    title: "Home",
    icon: "fa fa-home",
  },
  {
    link: "../explore_a5/index.html",
    title: "Explore",
    icon: "fa fa-hashtag",
  },
  {
    link: "#",
    title: "Notifications",
    icon: "fa fa-bell",
  },
  {
    link: "#",
    title: "Messages",
    icon: "fa fa-envelope",
  },
  {
    link: "#",
    title: "Bookmarks",
    icon: "fa fa-bookmark",
  },
  {
      link: "#",
      title: "Lists",
      icon: "fa fa-list",
    },
    {
        link: "#",
        title: "Profiles",
        icon: "fa fa-user",
     },
     {
         link: "#",
         title: "More",
         icon: "fa fa-circle",
      },
];

const NavigationSidebar = (activeTitle) => {
 return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->



                               ${navItems.map(
                                          (item) => `<a href=${item.link}  class = ${`"list-group-item ${
                                          item.title == activeTitle ? `active` : ``
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




