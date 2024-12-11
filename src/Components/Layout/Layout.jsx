import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import { Box } from "@mui/material"

function Layout() {
  return (
    <Box sx={{ backgroundColor:"#000" }}>
      <Navbar/>
      <Outlet/>
    </Box>
  )
}

export default Layout