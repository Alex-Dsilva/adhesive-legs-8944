import Navbar from './Comp/Navbar';
import AllRoutes from './Pages.jsx/AllRoutes';
import { Box, Image } from '@chakra-ui/react';

function App() {
  return (
    <Box className="App" border="5px solid black" fit="cover" minW={{base:"200vw",sm:"100vw",md:"100vw",lg:"100vw", xl: '100vw'}}>
    < Image src='https://a.ftscrt.com/static/images/splash/Sunrise_BG_01.jpg' alt='fatscbg' pos="fixed" top="0px" zIndex={-10} />
    <Navbar/>
    <AllRoutes/> 
    </Box>
  );
}

export default App;

// w={{base:"50vw",sm:"50vw",md:"50vw",lg:"50vw", xl: '50vw'}}