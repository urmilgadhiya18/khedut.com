// import axios from 'axios';
// import React, { useState } from 'react';
// import { Modal, Button, Form, Alert } from 'react-bootstrap';

// export default function Signin({ show, handleClose, openSignup, setIsAuth }) {
//   const [form, setForm] = useState({email: '', password: ''});
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
//     axios.post('http://localhost:3000/signin', form)
//       .then(result => {
//         if(result.data==="Wrong password" || result.data==="Invalid email or password"){
//           setError(result.data);
//         } else {
//           setIsAuth({name:result.data, email: form.email, auth: true});
//           setForm({ email: '', password: '' });
//           setError('');
//           handleClose();
//         }
//       })
//       .catch(err => {
//         setError('An error occurred. Please try again.');
//         console.log(err);
//       });
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


import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

export default function Signin({ show, handleClose, openSignup, setIsAuth }) {
  const [form, setForm] = useState({ email: '', password: '', role: '' });
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
    if (!form.role) {
      setError('Please select a role: Farmer or Businessman.');
      return;
    }

    axios.post('http://localhost:3000/signin', form)
      .then(result => {
        if (result.data === "Wrong password" || result.data === "Invalid email or password") {
          setError(result.data);
        } else {
          setIsAuth({ name: result.data, email: form.email, role: form.role, auth: true });
          setForm({ email: '', password: '', role: '' });
          setError('');
          handleClose();
        }
      })
      .catch(err => {
        setError('An error occurred. Please try again.');
        console.log(err);
      });
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              name="role"
              value={form.role}
              onChange={handleChange}
              required
            >
              <option value="">Select Role</option>
              <option value="farmer">Farmer</option>
              <option value="businessman">Businessman</option>
            </Form.Control>
          </Form.Group>
          {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
          <Button variant="primary" type="submit" className="w-100 mb-3">
            Sign In
          </Button>
          <div className="text-center">
            <span>Don't have an account? </span>
            <Button className="text-decoration-none m-0 pt-0 ps-0" variant="link" onClick={() => { handleClose(); openSignup(); }}>
              Sign Up
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
