import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import AdminDashLayout from "../../components/AdminDashLayout";
const Bar = () => {
  return (
    <AdminDashLayout>
        <Box m="20px" width='1630px'>
        <Header title="Bar Chart" subtitle="Simple Bar Chart" />
        <Box height="75vh">
            <BarChart />
        </Box>
        </Box>
    </AdminDashLayout>
  )
}

export default Bar