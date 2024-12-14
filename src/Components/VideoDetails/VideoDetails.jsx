import { CheckCircle } from "@mui/icons-material"
import { Box, Stack, Typography } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { Triangle } from "react-loader-spinner"
import ReactPlayer from "react-player"
import { Link, useParams } from "react-router-dom"
import Videos from "../Videos/Videos"
import { ApiKey } from "../../utils/constants"

function VideoDetails() {
  const [videoDetails , setVideoDetails] = useState([])
  const [relatedVideos , setRelatedVideos] = useState([])
  const {id} = useParams()
  async function getVideoDetails() {
    try {
      const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/videos?part=snippet,statistics&&id=${id}`,{
        headers:{
          'x-rapidapi-key': ApiKey,
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
      })
      setVideoDetails(data?.items[0] || [])
    } catch (error) {
      console.log("Error " , error);
      setVideoDetails([])
    }
  }

  async function getRelatedVideo() {
    try {
      const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/search?part=snippet&&id=${id}&&relatedToVideoId=${id}&&maxResults=50&&type=video`,{
        headers:{
          'x-rapidapi-key': ApiKey,
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
        }
      })
      console.log(data?.items);
      
      setRelatedVideos(data?.items || [])
    } catch (error) {
      console.log("Error " , error);
      setRelatedVideos([])
    }
  }

  useEffect(()=>{
    getVideoDetails();
    getRelatedVideo()
  },[id])

    if(videoDetails.length === 0 || relatedVideos.length === 0){
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
      <Stack direction={{ xs:'column' , md:'row' }}>
        <Box flex={1}>
          <Box sx={{ width:'100%' , position:'sticky' , top:"86px" } } textAlign={'right'}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className="react-player"/>
            <Typography color={"#fff"} variant="h5" fontWeight={'bold'} p={2}>
              {videoDetails?.snippet?.title}
            </Typography>
            <Stack direction={'row-reverse'} justifyContent={'space-between'} sx={{ color:"#fff" }} py={1} px={2}>
              <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
                <Typography variant={{ sm:'subtitle1' , md:'h6' }} color={"#fff"}>
                  {videoDetails?.snippet?.channelTitle}
                  <CheckCircle sx={{fontSize:"12px", color:"gray" , ml:'5px'}}/>
                </Typography>
              </Link>
              <Stack direction={'row'} gap={"20px"} alignItems={"center"}>
                <Typography variant="body1" sx={{ opacity:0.7 }}>
                  {parseInt(videoDetails?.statistics?.viewCount).toLocaleString()} Views
                </Typography>
                |
                <Typography variant="body1" sx={{ opacity:0.7 }}>
                  {parseInt(videoDetails?.statistics?.likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md:1, xs:5 }} justifyContent={"center"} alignItems="center">
          <Videos videos={relatedVideos} direction='column'/>
        </Box>  
      </Stack>

    </Box>
  )
}

export default VideoDetails