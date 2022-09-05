import Container from '@mui/material/Container';


import './App.css';
import DrawerAppBar from './DrawerAppBar';
import PostModal from './PostModal';





function App() {
  return (
    <div>
    <DrawerAppBar/>
    <Container sx={{ display: 'flex', flexDirection: "row" }}>
    <PostModal></PostModal>
    </Container>
    </div>
  );
}

export default App;
