import DisplayNavbar from "@/components/pages/display/Navbar";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack
      direction="column"
      spacing={5}  
    > 
      <DisplayNavbar />
    </Stack>
  )
}
