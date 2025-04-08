import config from "~/config";
//Layouts
import { HeaderOnly } from "~/Layout";
// Page
import Home from "~/pages/Home";
import Following from "~/pages/Following"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import Search from "~/pages/Search"
//Không cần login mà vẫn xem được
const publicRoutes = [
    {
        part: config.routes.home,
        component: Home
    },
    {
        part: config.routes.following,
        component: Following
    },
    {
        part: config.routes.profile,
        component: Profile
    },
    {
        part: config.routes.upload,
        component: Upload,
        layout: HeaderOnly
    },
    {
        part: config.routes.search,
        component: Search,
        layout: null
    }
]
//Phải login thì mới vào được
const privateRoutes = [

]

export { privateRoutes, publicRoutes }