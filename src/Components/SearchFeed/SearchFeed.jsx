import { Box , Typography } from "@mui/material"
import Videos from "../Videos/Videos"
import { useEffect, useState } from "react";
import axios from "axios";
import { Triangle } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { ApiKey } from "../../utils/constants";

function SearchFeed() {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()
  async function searchFeed() {
    try {
      const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${searchTerm}&maxResults=50&order=date`,{
        headers:{
          'x-rapidapi-key': ApiKey,
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
      })
      console.log(data);
      setVideos(data?.items || [])
    } catch (error) {
      console.log('Error' , error);
      setVideos([]); 
    }
  }
  useEffect(()=>{
    searchFeed()
  },[searchTerm])
  if(videos.length === 0){
    return <div style={{ width:'100%' , height:'100vh', display:'flex' , justifyContent:'center' , alignItems:'center' }}>
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="red"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
    </div>
  }
  return (
    <Box p={2} sx={{ flex:2 , height:'90vh', overflowY:"auto" }}>
      <Typography variant="h4" fontWeight={"bold"} mb={2} sx={{ color:"#fff"}}>
        Search Results For: <span style={{ color:"#f31503" }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos}/>
    </Box>
  )
}

export default SearchFeed