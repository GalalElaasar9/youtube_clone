import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Box } from '@mui/material'
import Feed  from './Components/Feed/Feed'
import Layout from './Components/Layout/Layout'
import VideoDetails from './Components/VideoDetails/VideoDetails'
import ChannelDetails from './Components/ChannelDetails/ChannelDetails'
import SearchFeed from './Components/SearchFeed/SearchFeed'

const router = createBrowserRouter([
  {path:'' , element:<Layout/>,children:[
    {path:"/", element:<Feed/>},
    {path:"/video/:id", element:<VideoDetails/>},
    {path:"/channel/:id", element:<ChannelDetails/>},
    {path:"/search/:searchTerm", element:<SearchFeed/>},
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
