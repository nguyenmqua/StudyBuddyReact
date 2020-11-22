// import React, { useState, useEffect, useContext } from "react";
// import UserContext from "../../utils/UserContext";

// const FormRequest = () => {
//     const {
//         userData,
//         handleInputChange,
//       } = useContext(UserContext);
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');

//   const submitRequest = async (e) => {
//     e.preventDefault();
//     console.log({ email, message });
//     const response = await fetch("/access", { 
//       method: 'POST', 
//       headers: { 
//           'Content-type': 'application/json'
//       }, 
//       body: JSON.stringify({email, message}) 
//   }); 
//     const resData = await response.json(); 
//     if (resData.status === 'success'){
//       alert("Message Sent."); 
//       this.resetForm()
//   }else if(resData.status === 'fail'){
//       alert("Message failed to send.")
//   }
//   };
//   return (
//     <div>
//       <h2 className="resetTitle">Reset Password</h2>
//       <hr />
//       <Form>
//         <FormGroup>
//           <Label for="email">Email Adress:</Label>
//           <Input
//             type="text"
//             name="email"
//             id="email"
//             placeholder="email"
//             value={userData.email}
//             onChange={handleInputChange}
//           />
//         </FormGroup>
//         <Button onClick={submitRequest} color="primary" block>
//           Send Reset Email
//         </Button>
//         <p className="signupLink">
//           <Link to="/signup">Don't have an account? Sign up here</Link>
//         </p>
//       </Form>
//     </div>
//   );
// };
// export default FormRequest;