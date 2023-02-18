
import NavigationSidebar from "./index.js";

$('#wd-sidebar').append(`
   <div class="container">
       <h1>Sidebar example</h1>
       ${NavigationSidebar()}

   </div>
`);