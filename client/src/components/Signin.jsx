// // import axios from 'axios';
// // import React, { useState } from 'react';
// // import { Modal, Button, Form, Alert } from 'react-bootstrap';

// import { NavLink } from "react-bootstrap";

// // export default function Signin({ show, handleClose, openSignup, setIsAuth }) {
// //   const [form, setForm] = useState({email: '', password: ''});
// //   const [error, setError] = useState('');

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setForm({
// //       ...form,
// //       [name]: value
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     axios.post('http://localhost:3000/signin', form)
// //       .then(result => {
// //         if(result.data==="Wrong password" || result.data==="Invalid email or password"){
// //           setError(result.data);
// //         } else {
// //           setIsAuth({name:result.data, email: form.email, auth: true});
// //           setForm({ email: '', password: '' });
// //           setError('');
// //           handleClose();
// //         }
// //       })
// //       .catch(err => {
// //         setError('An error occurred. Please try again.');
// //         console.log(err);
// //       });
// //   };

// //   return (
// //     <Modal show={show} onHide={handleClose} centered>
// //       <Modal.Header closeButton>
// //         <Modal.Title>Sign In</Modal.Title>
// //       </Modal.Header>
// //       <Modal.Body>
// //         <Form onSubmit={handleSubmit}>
// //           <Form.Group className="mb-3">
// //             <Form.Label>Email</Form.Label>
// //             <Form.Control
// //               type="email"
// //               name="email"
// //               value={form.email}
// //               onChange={handleChange}
// //               placeholder="Enter your email"
// //               required
// //             />
// //           </Form.Group>
// //           <Form.Group className="mb-3">
// //             <Form.Label>Password</Form.Label>
// //             <Form.Control
// //               type="password"
// //               name="password"
// //               value={form.password}
// //               onChange={handleChange}
// //               placeholder="Enter your password"
// //               required
// //             />
// //           </Form.Group>
// //           {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
// //           <Button variant="primary" type="submit" className="w-100 mb-3">
// //             Sign In
// //           </Button>
// //           <div className="text-center">
// //             <span>Don't have an account? </span>
// //             <Button className="text-decoration-none m-0 pt-0 ps-0" variant="link" onClick={() => { handleClose(); openSignup(); }}>
// //               Sign Up
// //             </Button>
// //           </div>
// //         </Form>
// //       </Modal.Body>
// //     </Modal>
// //   );
// // }


// import axios from 'axios';
// import React, { useState } from 'react';
// import { Modal, Button, Form, Alert } from 'react-bootstrap';

// export default function Signin({ show, handleClose, openSignup, setIsAuth }) {
//   const [form, setForm] = useState({ email: '', password: ''});
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // if (!form.role) {
//     //   setError('Please select a role: Farmer or Businessman.');
//     //   return;
//     // }

//     axios.post('http://localhost:3000/signin', form)
//     .then(result => {
//       if(result.data.message==="logged in successfully"){
//         setIsAuth({ name: result.data.name, email: form.email, role: result.data.role, auth: true });
//         const auth=({ name: result.data.name, email: form.email, role: result.data.role, auth: true});
//         localStorage.setItem("token", result.data.data);
//         // localStorage.setItem("auth", JSON.stringify(isAuth));
//         localStorage.setItem("auth", JSON.stringify(auth));
//         setForm({ email: '', password: ''});
//         setError('');
//         window.location.reload();
//         handleClose();
//       } else {
//         setError(result.data.message);
//       }
//     })
//     .catch (error => {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		})
//     // .catch(err => {
//     //   // setError('An error occurred. Please try again.');
//     //   setError(error.response.data.message);
//     //   console.log(err);
//     // });
//   };

//   return (
//     <Modal show={show} onHide={handleClose} centered>
//       <Modal.Header closeButton>
//         <Modal.Title>Sign In</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               required
//             />
//           </Form.Group>
//           <Form.Group className="mb-3">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               required
//             />
//           </Form.Group>
//           {/* <Form.Group className="mb-3">
//             <Form.Label>Role</Form.Label>
//             <Form.Control
//               as="select"
//               name="role"
//               value={form.role}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select Role</option>
//               <option value="farmer">Farmer</option>
//               <option value="businessman">Businessman</option>
//             </Form.Control>
//           </Form.Group> */}
//           {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
//           <Button variant="primary" type="submit" className="w-100 mb-3">
//             Sign In
//           </Button>
//           <div className="text-center">
//             <span>Don't have an account? </span>
//             <Button className="text-decoration-none m-0 pt-0 ps-0" variant="link" onClick={() => { handleClose(); openSignup(); }}>
//               Sign Up
//             </Button>
//           </div>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// }



// // import axios from 'axios';
// // import React, { useState } from 'react';
// // import { Modal, Button, Form, Alert } from 'react-bootstrap';

// // export default function Signin({ show, handleClose, openSignup, setIsAuth }) {
// //   const [form, setForm] = useState({ email: '', password: '' });
// //   const [error, setError] = useState('');

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setForm({
// //       ...form,
// //       [name]: value
// //     });
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     axios.post('http://localhost:3000/signin', form)
// //       .then(result => {
// //         if(result.data.message === "logged in successfully"){
// //           {console.log(result);
// //           }
// //           localStorage.setItem("token", result.data.data); // Store token
// //           setForm({ email: '', password: ''});
// //           setError('');
// //           handleClose();
// //         } else {
// //           setError(result.data.message);
// //         }
// //       })
// //       .catch(err => {
// //         setError('An error occurred. Please try again.');
// //         console.log(err);
// //       });
// //   };

// //   return (
// //     <Modal show={show} onHide={handleClose} centered>
// //       <Modal.Header closeButton>
// //         <Modal.Title>Sign In</Modal.Title>
// //       </Modal.Header>
// //       <Modal.Body>
// //         <Form onSubmit={handleSubmit}>
// //           <Form.Group className="mb-3">
// //             <Form.Label>Email</Form.Label>
// //             <Form.Control
// //               type="email"
// //               name="email"
// //               value={form.email}
// //               onChange={handleChange}
// //               placeholder="Enter your email"
// //               required
// //             />
// //           </Form.Group>
// //           <Form.Group className="mb-3">
// //             <Form.Label>Password</Form.Label>
// //             <Form.Control
// //               type="password"
// //               name="password"
// //               value={form.password}
// //               onChange={handleChange}
// //               placeholder="Enter your password"
// //               required
// //             />
// //           </Form.Group>
// //           {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
// //           <Button variant="primary" type="submit" className="w-100 mb-3">
// //             Sign In
// //           </Button>
// //           <div className="text-center">
// //             <span>Don't have an account? </span>
// //             <Button className="text-decoration-none m-0 pt-0 ps-0" variant="link" onClick={() => { handleClose(); openSignup(); }}>
// //               Sign Up
// //             </Button>
// //           </div>
// //         </Form>
// //       </Modal.Body>
// //     </Modal>
// //   );
// // }



import axios from 'axios';
import logo from '/logo.png'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Signin() {

  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/signin', form)
      .then(result => {
        if(result.data.message === "logged in successfully"){
          // {console.log(result);
          // }
          const auth=({ name: result.data.name, email: form.email, role: result.data.role, img: result.data.img, auth: true});
          localStorage.setItem("token", result.data.data); // Store token
          localStorage.setItem("auth", JSON.stringify(auth));
          {console.log(result);
          }
          setForm({ email: '', password: ''});
          setError('');
          navigate('/');
          window.location.reload();
          // handleClose();
        } else {
          setError(result.data.message);
        }
      })
      .catch(err => {
        setError('An error occurred. Please try again.');
        console.log(err);
      });
  };

  return (
    <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              src={logo}
              className="mx-auto h-20 w-auto"
            />
            <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border border-gray-300 bg-white ps-2 py-1.5 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <NavLink to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </NavLink>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md border border-gray-300 bg-white ps-2 py-1.5 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              {error && (
                <div className="mt-4 text-left text-sm text-red-500">
                    {error}
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                >
                  Sign In
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <NavLink to="/signup" className="font-semibold text-indigo-600 hover:text-indigo-500">
                Sign Up
              </NavLink>
            </p>
          </div>
        </div>
    </>
  );
}
