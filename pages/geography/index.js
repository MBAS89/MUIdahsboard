import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../components/theme";
import AdminDashLayout from "../../components/AdminDashLayout";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <AdminDashLayout>
    <Box m="20px" width='1630px'>
      <Header title="Geography" subtitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeographyChart />
      </Box>
    </Box>
    </AdminDashLayout>
  );
};

export default Geography;