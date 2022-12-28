import Navbar from './Comp/Navbar';
import AllRoutes from './Pages.jsx/AllRoutes';
import { Box, Image } from '@chakra-ui/react';
import Footer from './Comp/Footer'

function App() {
  return (
    <Box className="App" fit="cover" >
    <Navbar/>
    <AllRoutes/>
    <Footer/> 
    </Box>
  );
}

export default App;

