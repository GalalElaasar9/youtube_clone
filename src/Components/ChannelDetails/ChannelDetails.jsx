import { Box } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ChannelDetails() {
  const {id} = useParams();
  // console.log(id);
  async function getChannelDetails() {
    const {data} = await axios.get(`https://youtube-v31.p.rapidapi.com/channels?part=snippet,statistics`,{
      params:{
        id
      },
      headers:{
        'x-rapidapi-key': '9f7d4ad297mshb5cbf40ec761028p176fd8jsne316735420ce',
        'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
      }
    })
    console.log(data);
  }
  useEffect(()=>{
    getChannelDetails()
  },[id])  
  return (
    <Box>
      
    </Box>
  )
}

export default ChannelDetails