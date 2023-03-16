import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import AdminDashLayout from "../../components/AdminDashLayout";

const pie = () => {
  return (
    <AdminDashLayout>
        <Box m="20px" width='1630px'>
            <Header title="Line Chart" subtitle="Simple Line Chart" />
            <Box height="75vh">
                <LineChart />
            </Box>
        </Box>
    </AdminDashLayout>
  )
}

export default pie