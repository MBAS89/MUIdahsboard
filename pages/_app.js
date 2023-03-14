import '@/styles/globals.css'
import {ColorModeContext,useMode} from '../components/theme';
import { CssBaseline,ThemeProvider } from '@mui/material';
import { ProSidebarProvider } from 'react-pro-sidebar';

export default function App({ Component, pageProps }) {
  const [theme,colorMode] = useMode();
  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <ProSidebarProvider>
          <Component {...pageProps} />
        </ProSidebarProvider>
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
}
