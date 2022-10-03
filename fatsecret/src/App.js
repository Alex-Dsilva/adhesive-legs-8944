import Navbar from './Comp/Navbar';
import AllRoutes from './Pages.jsx/AllRoutes';
import { Box, Image } from '@chakra-ui/react';
import Footer from './Comp/Footer'

function App() {
  return (
    <Box className="App" fit="cover" overflow="hidden" minW={{base:"100vw",sm:"100vw",md:"100vw",lg:"100vw", xl: '100vw'}}>
    <Navbar/>
    <AllRoutes/>
    <Footer/> 
    </Box>
  );
}

export default App;

