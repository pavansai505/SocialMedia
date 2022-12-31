import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from './components/auth/auth';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import NotFound from './components/notFound/notFound';
import Home from './components/home/home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

function App() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="795216640706-b1dskadifrfquacgocsvmiustddfsg80.apps.googleusercontent.com"
      >
        <ThemeProvider theme={theme}>
          <Routes>
            {/* main page of the application */}
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            {/* sign in or sign up page of the application */}
            <Route path='/auth' element={<Auth></Auth>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
          
          <ToastContainer />
        </ThemeProvider></GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
