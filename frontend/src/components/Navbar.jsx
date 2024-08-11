// import './Navbar.css';
// import Signup from './Signup';
// import Signin from './Signin';
// import { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import logo from '../assets/logo.png'
// export default function Navbar({ isAuth, setIsAuth }) {

//   const signOut = () => {
//     setIsAuth({name:'', email:'', auth:false});
//   }

//   const [openSignin, setOpenSignin] = useState(false);
//   const [openSignup, setOpenSignup] = useState(false);

//   const handleOpenSignin = () => {
//     setOpenSignin(true);
//     setOpenSignup(false);
//   };

//   const handleCloseSignin = () => {
//     setOpenSignin(false);
//   };

//   const handleOpenSignup = () => {
//     setOpenSignup(true);
//     setOpenSignin(false);
//   };

//   const handleCloseSignup = () => {
//     setOpenSignup(false);
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
        


// <div className="navb">
//           <NavLink to="/"><img className='w-[100px] h-[100px] absolute top-[-20px]'  src={logo} alt="" /></NavLink>
//             <ul className="navlinks">
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/" aria-current="page">Home</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/schemes">Schemes</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/learn">Learn</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/sell">Sell</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/chat">Chat With AI</NavLink>
//               </li>
//             </ul>
//             <div>
//             {
//                 (isAuth.auth)?
//                 <Button id='lgn' onClick={signOut}>Sign Out</Button>
//                 :
//                 <Button id='lgn' onClick={handleOpenSignin}>Sign In</Button>
//             }
//             </div>
//           </div>
//       </nav>
//       <Signin show={openSignin} handleClose={handleCloseSignin} openSignup={handleOpenSignup} setIsAuth={setIsAuth} />
//       <Signup show={openSignup} handleClose={handleCloseSignup} openSignin={handleOpenSignin} />
//     </>
//   );
// }



// import './Navbar.css';
// import Signup from './Signup';
// import Signin from './Signin';
// import { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import logo from '../assets/logo.png'
// export default function Navbar({ isAuth, setIsAuth }) {

//   const signOut = () => {
//     setIsAuth({name:'', email:'', auth:false});
//   }

//   const [openSignin, setOpenSignin] = useState(false);
//   const [openSignup, setOpenSignup] = useState(false);

//   const handleOpenSignin = () => {
//     setOpenSignin(true);
//     setOpenSignup(false);
//   };

//   const handleCloseSignin = () => {
//     setOpenSignin(false);
//   };

//   const handleOpenSignup = () => {
//     setOpenSignup(true);
//     setOpenSignin(false);
//   };

//   const handleCloseSignup = () => {
//     setOpenSignup(false);
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
        


// <div className="navb">
//           <NavLink to="/"><img className='w-[100px] h-[100px] absolute top-[-20px]'  src={logo} alt="" /></NavLink>
//             <ul className="navlinks">
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/" aria-current="page">Home</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/schemes">Schemes</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/learn">Learn</NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/sell">Sell</NavLink>
//               </li>
//             </ul>
//             <div>
//             {
//                 (isAuth.auth)?
//                 <Button id='lgn' onClick={signOut}>Sign Out</Button>
//                 :
//                 <Button id='lgn' onClick={handleOpenSignin}>Sign In</Button>
//             }
//             </div>
//           </div>
//       </nav>
//       <Signin show={openSignin} handleClose={handleCloseSignin} openSignup={handleOpenSignup} setIsAuth={setIsAuth} />
//       <Signup show={openSignup} handleClose={handleCloseSignup} openSignin={handleOpenSignin} />
//     </>
//   );
// }



import './Navbar.css';
import Signup from './Signup';
import Signin from './Signin';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export default function Navbar({ isAuth, setIsAuth }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const signOut = () => {
    setIsAuth({ name: '', email: '', auth: false, role: '' });
    navigate('/');
  }

  const [openSignin, setOpenSignin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const handleOpenSignin = () => {
    setOpenSignin(true);
    setOpenSignup(false);
  };

  const handleCloseSignin = () => {
    setOpenSignin(false);
  };

  const handleOpenSignup = () => {
    setOpenSignup(true);
    setOpenSignin(false);
  };

  const handleCloseSignup = () => {
    setOpenSignup(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
        <div className="navb">
          <NavLink to="/"><img className='w-[100px] h-[100px] absolute top-[-20px]' src={logo} alt="Logo" /></NavLink>
          <ul className="navlinks">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/schemes">Schemes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/learn">Learn</NavLink>
            </li>
            {isAuth.auth && isAuth.role === 'farmer' && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/sell">Sell</NavLink>
              </li>
            )}
            {isAuth.auth && isAuth.role === 'businessman' && (
              <li className="nav-item">
                <NavLink className="nav-link" to="/buy">Buy</NavLink>
              </li>
            )}
            <li className="nav-item">
              <NavLink className="nav-link" to="/chat">Chatbot</NavLink>
            </li>
          </ul>
          <div>
            {isAuth.auth ? (
              <Button id='lgn' onClick={signOut}>Sign Out</Button>
            ) : (
              <Button id='lgn' onClick={handleOpenSignin}>Sign In</Button>
            )}
          </div>
        </div>
      </nav>
      <Signin 
        show={openSignin} 
        handleClose={handleCloseSignin} 
        openSignup={handleOpenSignup} 
        setIsAuth={setIsAuth} 
      />
      <Signup 
        show={openSignup} 
        handleClose={handleCloseSignup} 
        openSignin={handleOpenSignin} 
      />
    </>
  );
}