// import axios from 'axios'
// import React, { useState } from 'react';
// import { Modal, Button, Form, Alert } from 'react-bootstrap';

// export default function Signup({ show, handleClose, openSignin }) {
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         password: ''
//     });
//     const [error, setError] = useState('');
    
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm({
//             ...form,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:3000/signup',form)
//         .then(result=>{
//           if(result.data==="The user alredy exists."){
//             setError(result.data)
//           }else{
//             setForm({name:'', email:'', password:''});
//             setError('')
//             handleClose();
//             openSignin();
//           }
//         })
//         .catch(err => {
//           setError('An error occurred. Please try again.');
//           console.log(err);
//         });
// };

// return (
//     <Modal show={show} onHide={handleClose} centered>
//     <Modal.Header closeButton>
//     <Modal.Title className="text-center">Sign Up</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//     <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3" controlId="formName">
//         <Form.Label>Name</Form.Label>
//         <Form.Control
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             required
//         />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formEmail">
//         <Form.Label>Email</Form.Label>
//         <Form.Control
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             required
//         />
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="Enter your password"
//             required
//         />
//         </Form.Group>
//         {error && <Alert variant="danger" className="mb-3">{error}</Alert>}
//         <Button variant="primary" type="submit" className=" mb-3 w-100">
//         Sign Up
//         </Button>
//         <div className="text-center">
//         <span>Already have an account? </span>
//         <Button className="text-decoration-none m-0 pt-0 ps-0" variant="link" onClick={()=>{handleClose(); openSignin();}}>
//             Sign In
//         </Button>
//         </div>
//     </Form>
//     </Modal.Body>
// </Modal>
// );
// }


import axios from 'axios';
import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';

export default function Signup({ show, handleClose, openSignin }) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        role: '' // Added role to the form state
    });
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

        // Ensure the role is selected
        if (!form.role) {
            setError('Please select a role: Farmer or Businessman.');
            return;
        }

        axios.post('http://localhost:3000/signup', form)
        .then(result => {
            if (result.data === "The user already exists.") {
                setError(result.data);
            } else {
                setForm({ name: '', email: '', password: '', role: '' });
                setError('');
                handleClose();
                openSignin();
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
                <Modal.Title className="text-center">Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
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
                    <Form.Group className="mb-3" controlId="formPassword">
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
                    <Form.Group className="mb-3" controlId="formRole">
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
                    <Button variant="primary" type="submit" className="mb-3 w-100">
                        Sign Up
                    </Button>
                    <div className="text-center">
                        <span>Already have an account? </span>
                        <Button className="text-decoration-none m-0 pt-0 ps-0" variant="link" onClick={() => { handleClose(); openSignin(); }}>
                            Sign In
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}
