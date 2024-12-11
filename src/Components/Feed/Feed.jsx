import { Box, Stack, Typography } from "@mui/material"
import Sidebar from "../Sidebar/Sidebar"
import Videos from "../Videos/Videos"
import { useEffect, useState } from "react";
import axios from "axios";

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('New')
  async function getAllVideos() {
    try {
      const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${selectedCategory}`,{
        params:{
          maxResults: '50'
        },
        headers:{
          'x-rapidapi-key': '9f7d4ad297mshb5cbf40ec761028p176fd8jsne316735420ce',
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
      })
      console.log(data?.items);
      
    } catch (error) {
      console.log('Error' , error);
    }
  }
  useEffect(()=>{
    getAllVideos()
  },[selectedCategory])
  return (
    <Stack sx={{ flexDirection: {sx:"column" , md:"row"} }}>
      <Box sx={{ height:{sx:'auto', md:"92vh"}, borderRight:"1px solid #3d3d3d", px: {sx:0, md:2} }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/> 
        <Typography className="copyright" variant="body2" sx={{ mt:1.5 , color:"#fff" }}>
          Copyright 2024 Galal Elaasar
        </Typography>
      </Box>
      <Box p={2} sx={{ flex:2 , height:'90vh', overflowY:"auto" }}>
        <Typography variant="h4" fontWeight={"bold"} mb={2} sx={{ color:"#fff"}}>
          New <span style={{ color:"#f31503" }}>Videos</span>
        </Typography>
        <Videos videos={[]}/>
      </Box>
    </Stack>
  )
}

export default Feed