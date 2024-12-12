import { CheckCircle } from '@mui/icons-material';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { demoProfilePicture } from '../../utils/constants';
import { Link } from 'react-router-dom';

function ChannelCard({channelDetail}) {
  // console.log(channelDetail);
  return (
    <Box sx={{ boxShadow:"none", borderRadius:'20px' , display:'flex' , justifyContent:"center" , alignItems:"center" , width:{xs:356 , md:300} , height:"326px" , margin:"16px auto"}}>
      <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
        <CardContent className='d-flex' sx={{ color:"#fff" }}>
          <CardMedia
            image={channelDetail.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail.snippet?.title}
            sx={{ width:"180px", height:"180px", borderRadius:'50%', mb:2 , border:'1px solid #e3e3e3' }}
            />
          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ color:"gray",fontSize:14 , ml:'5px' }}/>
          </Typography>
          <Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}
                Subscribers
              </Typography>
            )}
          </Typography>
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard