import { Stack } from "@mui/material"
import { categories } from "../../utils/constants"

function Sidebar() {
  return (
    <Stack direction={'row'} sx={{ overflowY:"auto" , height:{sx:'auto', md: '95%'}, flexDirection:{md:'column'} }}>
      {categories.map((category,idx)=>{
        return <button key={idx}>
          <span>{category.name}</span>
          <span>{category.icon}</span>
        </button>
      })}
      
    </Stack>
  )
}

export default Sidebar