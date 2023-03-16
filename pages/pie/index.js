import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";
import AdminDashLayout from "../../components/AdminDashLayout";

const pie = () => {
  return (
    <AdminDashLayout>
        <Box m="20px" width='1630px'>
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box height="75vh">
                <PieChart />
            </Box>
        </Box>
    </AdminDashLayout>
  )
}

export default pie