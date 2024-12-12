import { CheckCircle } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { demoThumbnailUrl, demoChannelUrl, demoVideoUrl, demoChannelTitle , demoVideoTitle , demoProfilePicture } from '../../utils/constants';
import { Link } from 'react-router-dom';

function VideoCard({video}) {
  return (
    <Card sx={{ width: {md:'300px' , xs:'100%'} , boxShadow:'none' , borderRadius:0 }}>
      <Link to={video.id.videoId ? `/video/${video.id.videoId}`: demoVideoUrl}>
        <CardMedia
          image={video.snippet?.thumbnails?.high?.url}
          alt={video.snippet?.title}
          sx={{ width:"358px", height:"180px" }}
          />
      </Link>
      <CardContent sx={{ backgroundColor:"#1e1e1e" , height:"106px" }}>
      <Link to={video.id.videoId ? `/video/${video.id.videoId}`: demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight={"bold"} color={'#fff'}>
          {video?.snippet.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
      </Link>

      <Link to={video.snippet.channelId ? `/channelId/${video.snippet.channelId}`: demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight={"bold"} color={'gray'} sx={{ display:"flex", alignItems:"center", gap:"5px" }}>
          {video?.snippet.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ color:"gray",fontSize:12 }}/>
        </Typography>
      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard