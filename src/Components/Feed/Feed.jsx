import { Box, Stack, Typography } from "@mui/material"
import Sidebar from "../Sidebar/Sidebar"
import Videos from "../Videos/Videos"
import { useEffect, useState } from "react";
import axios from "axios";
import { Triangle } from "react-loader-spinner";
import { ApiKey } from "../../utils/constants";
function Feed() {
  const localCategory = localStorage.getItem('selectedCategory')||'New';
  const [selectedCategory, setSelectedCategory] = useState(localCategory);
  const [videos, setVideos] = useState([]);
  
  async function getAllVideos() {
    try {
      const { data } = await axios.get(`https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${selectedCategory}`, {
        params: {
          maxResults: '50',
        },
        headers: {
          'x-rapidapi-key': ApiKey,
          'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
        },
      });
      setVideos(data?.items || []); // تعيين مصفوفة فارغة إذا لم تكن البيانات موجودة
    } catch (error) {
      console.log('Error', error);
      setVideos([]); // في حالة الخطأ، تعيين مصفوفة فارغة
    }
  }

  useEffect(() => {
    getAllVideos();
  }, [selectedCategory]);

  if (videos.length === 0) {
    return (
      <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
    );
  }

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md: "92vh" }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 } }}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2024 Galal Elaasar
        </Typography>
      </Box>
      <Box p={2} sx={{ flex: 2, height: '90vh', overflowY: "auto" }}>
        <Typography variant="h4" fontWeight={"bold"} mb={2} sx={{ color: "#fff" }}>
          {selectedCategory} <span style={{ color: "#f31503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}


export default Feed