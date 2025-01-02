// // import './Navbar.css';
// // import Signup from './Signup';
// // import Signin from './Signin';
// // import { useState } from 'react';
// // import { Button } from 'react-bootstrap';
// // import { NavLink } from 'react-router-dom';
// // import logo from '../assets/logo.png'
// // export default function Navbar({ isAuth, setIsAuth }) {

// //   const signOut = () => {
// //     setIsAuth({name:'', email:'', auth:false});
// //   }

// //   const [openSignin, setOpenSignin] = useState(false);
// //   const [openSignup, setOpenSignup] = useState(false);

// //   const handleOpenSignin = () => {
// //     setOpenSignin(true);
// //     setOpenSignup(false);
// //   };

// //   const handleCloseSignin = () => {
// //     setOpenSignin(false);
// //   };

// //   const handleOpenSignup = () => {
// //     setOpenSignup(true);
// //     setOpenSignin(false);
// //   };

// //   const handleCloseSignup = () => {
// //     setOpenSignup(false);
// //   };

// //   return (
// //     <>
// //       <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
        


// // <div className="navb">
// //           <NavLink to="/"><img className='w-[100px] h-[100px] absolute top-[-20px]'  src={logo} alt="" /></NavLink>
// //             <ul className="navlinks">
// //               <li className="nav-item">
// //                 <NavLink className="nav-link" to="/" aria-current="page">Home</NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink className="nav-link" to="/schemes">Schemes</NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink className="nav-link" to="/learn">Learn</NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink className="nav-link" to="/sell">Sell</NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink className="nav-link" to="/chat">Chat With AI</NavLink>
// //               </li>
// //             </ul>
// //             <div>
// //             {
// //                 (isAuth.auth)?
// //                 <Button id='lgn' onClick={signOut}>Sign Out</Button>
// //                 :
// //                 <Button id='lgn' onClick={handleOpenSignin}>Sign In</Button>
// //             }
// //             </div>
// //           </div>
// //       </nav>
// //       <Signin show={openSignin} handleClose={handleCloseSignin} openSignup={handleOpenSignup} setIsAuth={setIsAuth} />
// //       <Signup show={openSignup} handleClose={handleCloseSignup} openSignin={handleOpenSignin} />
// //     </>
// //   );
// // }



// // import './Navbar.css';
// // import Signup from './Signup';
// // import Signin from './Signin';
// // import { useState } from 'react';
// // import { Button } from 'react-bootstrap';
// // import { NavLink } from 'react-router-dom';
// // import logo from '../assets/logo.png'
// // export default function Navbar({ isAuth, setIsAuth }) {

// //   const signOut = () => {
// //     setIsAuth({name:'', email:'', auth:false});
// //   }

// //   const [openSignin, setOpenSignin] = useState(false);
// //   const [openSignup, setOpenSignup] = useState(false);

// //   const handleOpenSignin = () => {
// //     setOpenSignin(true);
// //     setOpenSignup(false);
// //   };

// //   const handleCloseSignin = () => {
// //     setOpenSignin(false);
// //   };

// //   const handleOpenSignup = () => {
// //     setOpenSignup(true);
// //     setOpenSignin(false);
// //   };

// //   const handleCloseSignup = () => {
// //     setOpenSignup(false);
// //   };

// //   return (
// //     <>
// //       <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
        


// // <div className="navb">
// //           <NavLink to="/"><img className='w-[100px] h-[100px] absolute top-[-20px]'  src={logo} alt="" /></NavLink>
// //             <ul className="navlinks">
// //               <li className="nav-item">
// //                 <NavLink className="nav-link" to="/" aria-current="page">Home</NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink className="nav-link" to="/schemes">Schemes</NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink className="nav-link" to="/learn">Learn</NavLink>
// //               </li>
// //               <li className="nav-item">
// //                 <NavLink className="nav-link" to="/sell">Sell</NavLink>
// //               </li>
// //             </ul>
// //             <div>
// //             {
// //                 (isAuth.auth)?
// //                 <Button id='lgn' onClick={signOut}>Sign Out</Button>
// //                 :
// //                 <Button id='lgn' onClick={handleOpenSignin}>Sign In</Button>
// //             }
// //             </div>
// //           </div>
// //       </nav>
// //       <Signin show={openSignin} handleClose={handleCloseSignin} openSignup={handleOpenSignup} setIsAuth={setIsAuth} />
// //       <Signup show={openSignup} handleClose={handleCloseSignup} openSignin={handleOpenSignin} />
// //     </>
// //   );
// // }



// import './Navbar.css';
// import Signup from './Signup';
// import Signin from './Signin';
// import { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';
// import logo from '../assets/logo.png';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// export default function Navbar({ isAuth, setIsAuth }) {
//   const signOut = () => {
//     localStorage.removeItem("token");
// 		localStorage.removeItem("auth");
// 		window.location.reload();
// 	};
  
//   const localAuth = localStorage.getItem('auth');
//   if(!localAuth) localStorage.setItem("auth",JSON.stringify({ name: '', email: '', auth: '', role: '' }));
//   const auth = JSON.parse(localAuth);

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

//   // return (
//   //   <>
//   //     <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
//   //       <div className="container-fluid m-3">
//   //         <NavLink to="/"><img className='navbar-brand w-[100px] h-[100px] absolute top-[-20px]' src={logo} alt="Logo" /></NavLink>
//   //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//   //           <span className="navbar-toggler-icon"></span>
//   //         </button>
//   //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//   //           <ul className="navbar-nav me-auto mb-2 mb-lg-0 navlinks">
//   //             <li className="nav-item">
//   //               <NavLink className="nav-link" to="/" aria-current="page">Home</NavLink>
//   //             </li>
//   //             <li className="nav-item">
//   //               <NavLink className="nav-link" to="/schemes">Schemes</NavLink>
//   //             </li>
//   //             <li className="nav-item">
//   //               <NavLink className="nav-link" to="/learn">Learn</NavLink>
//   //             </li>
//   //             {auth.auth && auth.role === 'farmer' && (
//   //               <li className="nav-item">
//   //                 <NavLink className="nav-link" to="/sell">Sell</NavLink>
//   //               </li>
//   //             )}
//   //             {auth.auth && auth.role === 'businessman' && (
//   //               <li className="nav-item">
//   //                 <NavLink className="nav-link" to="/buy">Buy</NavLink>
//   //               </li>
//   //             )}
//   //             <li className="nav-item">
//   //               <NavLink className="nav-link" to="/chat">Chatbot</NavLink>
//   //             </li>
//   //           </ul>
//   //           <div>
//   //             {auth.auth ? (
//   //               <Button id='lgn' onClick={signOut}>Sign Out</Button>
//   //             ) : (
//   //               <Button id='lgn' onClick={handleOpenSignin}>Sign In</Button>
//   //             )}
//   //           </div>
//   //         </div>
//   //       </div>
//   //     </nav>
//   //     <Signin 
//   //       show={openSignin} 
//   //       handleClose={handleCloseSignin} 
//   //       openSignup={handleOpenSignup} 
//   //       setIsAuth={setIsAuth} 
//   //     />
//   //     <Signup 
//   //       show={openSignup} 
//   //       handleClose={handleCloseSignup} 
//   //       openSignin={handleOpenSignin} 
//   //     />
//   //   </>
//   // );
// }






// import { useState, useEffect } from 'react';
// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
// import logo from '/logo.png';
// import Signup from './Signup';
// import Signin from './Signin';
// import { NavLink } from 'react-router-dom';

// const navigation = [
//   { name: 'Home', to: '/', current: true },
//   { name: 'Schemes', to: '/schemes', current: false },
//   { name: 'Learn', to: '/learn', current: false },
//   { name: 'Sell', to: '/sell', current: false },
//   { name: 'Buy', to: '/buy', current: false },
//   { name: 'Chatbot', to: '/chat', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Navbar() {
//   const [auth, setAuth] = useState({ auth: false }); // Default auth state

//   useEffect(() => {
//     const localAuth = localStorage.getItem('auth');
//     if (!localAuth) {
//       localStorage.setItem("auth", JSON.stringify({ name: '', email: '', auth: false, role: '' }));
//     }
//     setAuth(JSON.parse(localAuth));
//   }, []);

//   const signOut = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("auth");
//     setAuth({ auth: false });
//     window.location.reload();
//   };

//   return (
//     <Disclosure as="nav" className="bg-white shadow-md">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button */}
//             <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600">
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
//               <XMarkIcon aria-hidden="true" className="hidden h-6 w-6" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex flex-shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 src={logo}
//                 className="h-8 w-auto"
//               />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     to={item.to}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900',
//                       'rounded-md px-3 py-2 text-sm font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             {auth.auth ? (
//               <>
//                 <button
//                   type="button"
//                   className="relative rounded-full bg-white p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
//                 >
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon aria-hidden="true" className="h-6 w-6" />
//                 </button>

//                 {/* Profile dropdown */}
//                 <Menu as="div" className="relative ml-3">
//                   <div>
//                     <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-600">
//                       <span className="sr-only">Open user menu</span>
//                       <img
//                         alt=""
//                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                         className="h-8 w-8 rounded-full"
//                       />
//                     </MenuButton>
//                   </div>
//                   <MenuItems
//                     as="div"
//                     className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
//                   >
//                     <MenuItem>
//                       <NavLink to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                         Your Profile
//                       </NavLink>
//                     </MenuItem>
//                     {/* <MenuItem>
//                       <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                         Settings
//                       </a>
//                     </MenuItem> */}
//                     <MenuItem>
//                       <a href="#" onClick={signOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                         Sign out
//                       </a>
//                     </MenuItem>
//                   </MenuItems>
//                 </Menu>
//               </>
//             ) : (
//               <NavLink to="/signin" className="text-gray-600 hover:text-gray-900">
//                 <button>Sign In</button>
//                 {/* Sign In */}
//               </NavLink>
//             )}
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               to={item.to}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   );
// }



// import './Navbar.css'
import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '/logo.png';
import defaultImg from '/dp.png'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Schemes', href: '/schemes', current: false },
  { name: 'Learn', href: '/learn', current: false },
  { name: 'Chat with AI', href: '/chat', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({ auth: false }); // Default auth state

  useEffect(() => {
    const localAuth = localStorage.getItem('auth');
    if (!localAuth) {
      localStorage.setItem("auth", JSON.stringify({ name: '', email: '', auth: false, role: '' }));
    }
    setAuth(JSON.parse(localAuth));
  }, []);

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    setAuth({ auth: false });
    navigate('/');
    window.location.reload();
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-18 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="Your Company"
                src={logo}
                className="h-[65px] w-[65px]"
              />
            </div>
            <div className="hidden sm:ml-6 sm:flex items-center">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={({ isActive }) =>
                      classNames(
                        isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                {auth.auth && auth.role==="farmer" && (
                    <NavLink
                      to="/sell"
                      className={({ isActive }) =>
                        classNames(
                          isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )
                      }
                    >
                      Sell
                    </NavLink>
                  )}
                  {auth.auth && auth.role==="businessman" && (
                    <NavLink
                      to="/buy"
                      className={({ isActive }) =>
                        classNames(
                          isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )
                      }
                    >
                      Buy
                    </NavLink>
                  )}
                  
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {auth.auth ? (
              <>
                <button
                  type="button"
                  className="relative rounded-full bg-white p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-600">
                      <span className="sr-only">Open user menu</span>
                      {/* {
                        profileImg=(auth.img)
                          ?(auth.img)
                          :(defaultPicture)
                      } */}
                      <img
                        alt=""
                        src={auth.img}
                        // src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/01/04/13/virat-kohli.jpg"
                        className="h-12 w-12 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    as="div"
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
                  >
                    <MenuItem disabled>
                      <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-bold">
                        Hi!, {auth.name}
                      </div>
                    </MenuItem>
                    <MenuItem>
                      <NavLink to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Your Profile
                      </NavLink>
                    </MenuItem>
                    <MenuItem>
                      <a href="#" onClick={signOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Sign out
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </>
            ) : (
              <NavLink to="/signin" className="text-gray-600 hover:text-gray-900">
                {/* <button className='bg-danger'>Sign In</button> */}
                <button className='py-2 bg-[#25941f] text-[#fff] hover:text-[#000]'>Sign In</button>
              </NavLink>
            )}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={NavLink}
              to={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={({ isActive }) =>
                classNames(
                  isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )
              }
            >
              {item.name}
            </DisclosureButton>
          ))}
          {auth.auth && auth.role==="farmer" && (
              <DisclosureButton
                as={NavLink}
                to="/sell"
                className={({ isActive }) =>
                  classNames(
                    isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )
                }
              >
                Sell
              </DisclosureButton>
            )}
            {auth.auth && auth.role==="businessman" && (
              <DisclosureButton
                as={NavLink}
                to="/buy"
                className={({ isActive }) =>
                  classNames(
                    isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )
                }
              >
                Buy
              </DisclosureButton>
            )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}




// // import './Navbar.css';
// import Signup from './Signup';
// import Signin from './Signin';
// // import { useState } from 'react';
// // import { Button } from 'react-bootstrap';
// // import { NavLink } from 'react-router-dom';
// import logo from '../assets/logo.png';
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

// const navigation = [
//   { name: 'Home', href: '/', current: true },
//   { name: 'Schemes', href: '/schemes', current: false },
//   { name: 'Learn', href: '/learn', current: false },
//   { name: 'Sell', href: '/sell', current: false },
//   { name: 'Buy', href: '/buy', current: false },
//   { name: 'Chatbot', href: '/chat', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// const signOut = () => {
//       localStorage.removeItem("token");
//   		localStorage.removeItem("auth");
//   		window.location.reload();
//   	};
    
//     const localAuth = localStorage.getItem('auth');
//     if(!localAuth) localStorage.setItem("auth",JSON.stringify({ name: '', email: '', auth: '', role: '' }));
//     const auth = JSON.parse(localAuth);
  
//     // const [openSignin, setOpenSignin] = useState(false);
//     // const [openSignup, setOpenSignup] = useState(false);
  
//     // const handleOpenSignin = () => {
//     //   setOpenSignin(true);
//     //   setOpenSignup(false);
//     // };
  
//     // const handleCloseSignin = () => {
//     //   setOpenSignin(false);
//     // };
  
//     // const handleOpenSignup = () => {
//     //   setOpenSignup(true);
//     //   setOpenSignin(false);
//     // };
  
//     // const handleCloseSignup = () => {
//     //   setOpenSignup(false);
//     // };

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="bg-white shadow-md">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:bg-gray-200 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600">
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block h-6 w-6" />
//               <XMarkIcon aria-hidden="true" className="hidden h-6 w-6" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex flex-shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                 src={logo}
//                 className="h-8 w-auto"
//               />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900',
//                       'rounded-md px-3 py-2 text-sm font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button
//               type="button"
//               className="relative rounded-full bg-white p-1 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
//             >
//               <span className="sr-only">View notifications</span>
//               <BellIcon aria-hidden="true" className="h-6 w-6" />
//             </button>

//             {/* Profile dropdown */}
//             <Menu as="div" className="relative ml-3">
//               <div>
//                 <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-600">
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     alt=""
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     className="h-8 w-8 rounded-full"
//                   />
//                 </MenuButton>
//               </div>
//               <MenuItems
//                 as="div"
//                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none"
//               >
//                 <MenuItem>
//                   <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                     Your Profile
//                   </a>
//                 </MenuItem>
//                 {/* <MenuItem>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                     Settings
//                   </a>
//                 </MenuItem> */}
//                 <MenuItem>
//                   <a href="#" onClick={signOut} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                     Sign out
//                   </a>
//                 </MenuItem>
//               </MenuItems>
//             </Menu>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-200 hover:text-gray-900',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   );
// }




// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Home', href: '/', current: true },
//   { name: 'Schemes', href: '/schemes', current: false },
//   { name: 'Learn', href: '/learn', current: false },
//   { name: 'Sell', href: '/sell', current: false },
//   { name: 'Buy', href: '/buy', current: false },
//   { name: 'Chatbot', href: '/chat', current: false },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Navbar() {
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//             {/* Mobile menu button*/}
//             <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//               <span className="absolute -inset-0.5" />
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
//               <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
//             </DisclosureButton>
//           </div>
//           <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex flex-shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 src={logo}
//                 className="h-8 w-auto"
//               />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {navigation.map((item) => (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     aria-current={item.current ? 'page' : undefined}
//                     className={classNames(
//                       item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                       'rounded-md px-3 py-2 text-sm font-medium',
//                     )}
//                   >
//                     {item.name}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <button
//               type="button"
//               className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//             >
//               <span className="absolute -inset-1.5" />
//               <span className="sr-only">View notifications</span>
//               <BellIcon aria-hidden="true" className="h-6 w-6" />
//             </button>

//             {/* Profile dropdown */}
//             <Menu as="div" className="relative ml-3">
//               <div>
//                 <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">Open user menu</span>
//                   <img
//                     alt=""
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                     className="h-8 w-8 rounded-full"
//                   />
//                 </MenuButton>
//               </div>
//               <MenuItems
//                 transition
//                 className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
//               >
//                 <MenuItem>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                     Your Profile
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                     Settings
//                   </a>
//                 </MenuItem>
//                 <MenuItem>
//                   <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
//                     Sign out
//                   </a>
//                 </MenuItem>
//               </MenuItems>
//             </Menu>
//           </div>
//         </div>
//       </div>

//       <DisclosurePanel className="sm:hidden">
//         <div className="space-y-1 px-2 pb-3 pt-2">
//           {navigation.map((item) => (
//             <DisclosureButton
//               key={item.name}
//               as="a"
//               href={item.href}
//               aria-current={item.current ? 'page' : undefined}
//               className={classNames(
//                 item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                 'block rounded-md px-3 py-2 text-base font-medium',
//               )}
//             >
//               {item.name}
//             </DisclosureButton>
//           ))}
//         </div>
//       </DisclosurePanel>
//     </Disclosure>
//   )
// }
