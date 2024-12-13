import { Box } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ChannelCard from "../ChannelCard/ChannelCard";

function ChannelDetails() {
  const [channelDetail , setChannelDetail] = useState(null)
  const [channelvideos , setChannelVideos] = useState([])
  const {id} = useParams();
  // console.log(id);
  async function getChannelDetails() {
    try {
      const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/channels?part=snippet&id=${id}`,{
        headers:{
          'x-rapidapi-key': '9f7d4ad297mshb5cbf40ec761028p176fd8jsne316735420ce',
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
      })
      console.log(data?.items[0]);
      setChannelDetail(data?.items[0])
    } catch (error) {
      console.log('Error ' , error);
    }
  }

  async function getChannelVideos() {
    try {
      const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet&order=date`,{
        headers:{
          'x-rapidapi-key': '9f7d4ad297mshb5cbf40ec761028p176fd8jsne316735420ce',
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
      })
      console.log(data?.items);
      setChannelVideos(data?.items)
    } catch (error) {
      console.log('Error ' , error);
    }
  }

  useEffect(()=>{
    getChannelDetails()
    getChannelVideos()
  },[id])  
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div style={{ backgroundImage:'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)' , position:"relative" , zIndex:10 , height:"300px"}}/>
        <ChannelCard channelDetail={channelDetail}/>
      </Box>
    </Box>
  )
}

export default ChannelDetails