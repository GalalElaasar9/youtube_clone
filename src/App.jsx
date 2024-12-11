import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Feed  from './Components/Feed/Feed'
import Layout from './Components/Layout/Layout'
import VideoDetails from './Components/VideoDetails/VideoDetails'
import ChannelDetails from './Components/ChannelDetails/ChannelDetails'
import SearchFeed from './Components/SearchFeed/SearchFeed'
import NotFound from './Components/NotFound/NotFound'

const router = createBrowserRouter([
  {path:'' , element:<Layout/>,children:[
    {path:"/", element:<Feed/>},
    {path:"/video/:id", element:<VideoDetails/>},
    {path:"/channel/:id", element:<ChannelDetails/>},
    {path:"/search/:searchTerm", element:<SearchFeed/>},
    {path:"*", element:<NotFound/>},
  ]},
])
function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
