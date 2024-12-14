import { Box, Stack } from "@mui/material"
import VideoCard from "../VideoCard/VideoCard";
import ChannelCard from "../ChannelCard/ChannelCard";
import { Triangle } from "react-loader-spinner";

const Videos = ({videos , direction}) => {
  console.log(videos);
  return (
    <Stack direction={direction || 'row'} flexWrap={"wrap"} justifyContent={'start'} gap={2}>
      {Array.isArray(videos) && videos.map((video, index) => (
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