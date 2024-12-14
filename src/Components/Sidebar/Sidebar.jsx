import { Stack } from "@mui/material"
import { categories } from "../../utils/constants"
import { useEffect } from "react";
function Sidebar({selectedCategory , setSelectedCategory}) {
  
  function handleCategory(category) {
    setSelectedCategory(category.name);
    localStorage.setItem('selectedCategory',category)
  }
  useEffect(()=>{
    const localCategory = localStorage.getItem('selectedCategory');
    if(localCategory) setSelectedCategory(localCategory)
  },[selectedCategory]);

  return (
    <Stack direction={'row'} sx={{ overflowY:"auto" , height:{sx:'auto', md: '95%'}, flexDirection:{md:'column'} }}>
      {categories.map((category,idx)=>{
        return <button key={idx} className="category-btn" onClick={()=>handleCategory(category.name)} style={{ backgroundColor: category.name === localStorage.getItem('selectedCategory') && '#FC1503',color:"#FFF"}}>
          <span style={{ color: category.name === selectedCategory ? '#fff' : '#f00', marginRight:"15px"}}>{category.icon}</span>
          <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8', marginRight:"15px"}}>{category.name}</span>
        </button>
      })}
    </Stack>
  )
}

export default Sidebar