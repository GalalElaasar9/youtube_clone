import { Box } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ChannelCard, { ChannelCard2 } from "../ChannelCard/ChannelCard";
import Videos from "../Videos/Videos";
import { ApiKey } from "../../utils/constants";
import { Triangle } from "react-loader-spinner";

function ChannelDetails() {
  const [channelDetail , setChannelDetail] = useState(null)
  const [channelvideos , setChannelVideos] = useState(null)
  const {id} = useParams();
  // console.log(id);
  async function getChannelDetails() {
    try {
      const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/channels?part=snippet&id=${id}`,{
        headers:{
          'x-rapidapi-key': ApiKey,
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
      const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet&order=date&maxResults=50`,{
        headers:{
          'x-rapidapi-key': ApiKey,
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

  if(channelDetail===null || channelvideos ===null){
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
    <Box minHeight={"95vh"}>
      <Box>
        <div style={{ backgroundImage:'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)' , position:"relative" , zIndex:10 , height:"300px"}}/>
        <ChannelCard2 channelDetail={channelDetail} marginTop="-130px" zIndex="18" />
      </Box>
      <Box display={"flex"} p={2}>
        <Box sx={{ mr: {sm: '100px' } }}/>
          <Videos videos={channelvideos}/>
      </Box>
    </Box>
  )
}

export default ChannelDetails