import { Box, Stack } from "@mui/material"
import VideoCard from "../VideoCard/VideoCard";
import ChannelCard from "../ChannelCard/ChannelCard";

const Videos = ({videos}) => {
  // console.log(videos);
  if(videos === null){
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
    <Stack direction={'row'} flexWrap={"wrap"} justifyContent={'start'} gap={2}>
      {videos.map((video,index)=> (
        video.id.videoId ? (
          <Box key={`video-${video.id.videoId}`}>
            <VideoCard video={video} />
          </Box>
        ) : (
          <Box key={`channel-${video.id.channelId || index}`}>
            <ChannelCard channelDetail={video} />
          </Box>
        )
      ))}
    </Stack>
  )
}

export default Videos