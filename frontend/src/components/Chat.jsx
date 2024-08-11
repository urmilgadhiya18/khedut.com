// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

// export default function Chat() {
//   const [message, setMessage] = useState('');
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleSendMessage = async () => {
//     if (message.trim()) {
//       setLoading(true);

//       try {
//         const response = await axios.post('http://localhost:3000/messages', {
//           message
//         });

//         if (response.status === 200) {
//           setQuestions([...questions, message]);
//           setAnswers([...answers, response.data.answer]);
//           setMessage('');
//         } else {
//           alert('Failed to send message.');
//         }
//       } catch (error) {
//         console.error('Error sending message:', error);
//         alert('An error occurred while sending the message.');
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       alert('Please type a message before sending.');
//     }
//   };

//   return (
//     <div className="container-fluid py-5 bg-light" style={{ minHeight: '100vh' }}>
//       <div className="row justify-content-center">
//         <div className="col-12">
//           <div className="card shadow-sm w-100">
//             <div className="card-header bg-primary text-white text-center">
//               <h4>Chat Room</h4>
//             </div>
//             <div className="card-body">
//               <div className="mb-3">
//                 <div 
//                   className="chat-box" 
//                   style={{ 
//                     height: '500px', 
//                     overflowY: 'auto', 
//                     border: '1px solid #ddd', 
//                     padding: '20px', 
//                     borderRadius: '5px', 
//                     backgroundColor: '#f8f9fa' 
//                   }}>
//                   {questions.length > 0 ? (
//                     questions.map((que, index) => (
//                       // <div>
//                       //   <div 
//                       //     key={index} 
//                       //     className="alert alert-secondary p-2 mb-2" 
//                       //     role="alert"
//                       //   >
//                       //     {que}
//                       //   </div>
//                       //   <div 
//                       //     key={-index} 
//                       //     className="alert alert-secondary p-2 mb-2" 
//                       //     role="alert"
//                       //   >
//                       //     {answers[index]}
//                       //   </div>
//                       // </div>



//                       <div className="container">
//   <div key={index} className="row justify-content-end">
//     <div className="col-auto">
//       <div className="alert alert-secondary p-2 mb-2 text-end" role="alert" style={{ maxWidth: 'fit-content' }}>
//         {que}
//       </div>
//     </div>
//   </div>
//   <div key={-index} className="row justify-content-start">
//     <div className="col-auto">
//       <div className="alert alert-secondary p-2 mb-2 text-start" role="alert" style={{ maxWidth: '75%' }}>
//         {answers[index]}
//       </div>
//     </div>
//   </div>
// </div>





//                       // <div className="container">
//                       //   <div key={index} className="row">
//                       //     <div className="col-md-8 offset-md-4">
//                       //       <div className="alert alert-secondary p-2 mb-2 text-end" role="alert">
//                       //         {que}
//                       //       </div>
//                       //     </div>
//                       //   </div>
//                       //   <div key={-index} className="row">
//                       //     <div className="col-md-8">
//                       //       <div className="alert alert-secondary p-2 mb-2 text-start" role="alert">
//                       //         {answers[index]}
//                       //       </div>
//                       //     </div>
//                       //   </div>
//                       // </div>
//                     ))
//                   ) : (
//                     <p className="text-muted text-center">No messages yet.</p>
//                   )}
//                 </div>
//               </div>
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Type your message..."
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 />
//                 <button 
//                   className="btn btn-primary" 
//                   onClick={handleSendMessage}
//                   disabled={loading}
//                 >
//                   {loading ? 'Sending...' : 'Send'}
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






// new
// new
// new
// new
// new
// new

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Chat.css'

export default function Chat() {
  const [message, setMessage] = useState('');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSendMessage = async () => {
    if (message.trim()) {
      setLoading(true);

      try {
        const response = await axios.post('http://localhost:3000/messages', {
          message
        });

        if (response.status === 200) {
          setQuestions([...questions, message]);
          setAnswers([...answers, response.data.answer]);
          setMessage('');
        } else {
          alert('Failed to send message.');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        alert('An error occurred while sending the message.');
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please type a message before sending.');
    }
  };

  return (
    <div className='w-[100vw] h-[90vh] mt-12 p-5'>
      <div className="flex flex-col h-[80vh] w-[70vw] mx-auto bg-gray-100">
        <div className="rounded-t-lg bg-success text-white p-4 text-center text-xl font-bold">
          Khedut Saathi
        </div>
        <div className="flex-1 p-4 overflow-auto bg-gray-200">
          <div className="space-y-4">
            {questions.length > 0 ? (
              questions.map((que, index) => (
                <div key={index} className="flex flex-col space-y-2">
                  <div className="self-end max-w-xs p-3 bg-green-200 text-gray-800 rounded-lg shadow-md">
                    {que}
                  </div>
                  <div className="self-start max-w-xs p-3 bg-white text-gray-800 rounded-lg shadow-md">
                    {answers[index]}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No messages yet.</p>
            )}
          </div>
        </div>
        <div className="bg-white p-4 flex items-center border-t border-gray-300">
          {/* <input
            type="text"
            className="flex-1 p-2 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-500"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          /> */}
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg border-gray-300 bg-white focus:outline-none focus:border-blue-500"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />

          <button 
            className={`ml-4 py-2 px-4 rounded-lg text-white ${loading ? 'bg-gray-400' : 'bg-success hover:bg-blue-600'} transition`}
            onClick={handleSendMessage}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}
