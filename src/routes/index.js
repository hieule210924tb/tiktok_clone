//Layouts
import { HeaderOnly } from "~/component/Layout";
// Page
import Home from "~/pages/Home";
import Following from "~/pages/Following"
import Profile from "~/pages/Profile"
import Upload from "~/pages/Upload"
import Search from "~/pages/Search"
//Không cần login mà vẫn xem được
const publicRoutes = [
    {
        part: '/',
        component: Home
    },
    {
        part: '/following',
        component: Following
    },
    {
        part: '/profile',
        component: Profile
    },
    {
        part: '/upload',
        component: Upload,
        layout: HeaderOnly
    },
    {
        part: '/search',
        component: Search,
        layout: null
    }
]
//Phải login thì mới vào được
const privateRoutes = [

]

export { privateRoutes, publicRoutes }