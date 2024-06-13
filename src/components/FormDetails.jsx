import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import Alert from "./Alert";
import { Link } from "react-router-dom";

export default function FormDetails(){
    const {store,dispatch}= useGlobalReducer();
    const [alert,setAlert] =useState();
    const [display,setDisplay] = useState(false);
    const [message,setMessage] = useState('')

    const [contact,setContact] = useState({
        name:'',
        phone: '',
        email:'',
        address:''

    })

    async function handleAddContact(e) {
        e.preventDefault();
        
        const resp = await fetch("https://playground.4geeks.com/contact/agendas/Sandra/contacts",{
            method: "POST",
            body: JSON.stringify(contact),
            headers: {
                "Content-Type": "application/json"
              }
        });
        if(resp.ok)
            {

                const data = await resp.json();
                dispatch({type:"contact/added" , payload:data});
                setContact({
                    name:'',
                    phone: '',
                    email:'',
                    address:''
            
                });  
                setDisplay(true);
                setMessage(`user ${data.name} has been added!`)
                                
            }else{
                const error = await resp.json();
            }
  
      }
    return (
        <>
                   <div className="text-center mt-3">
                   <Link to="/" className="text-center mx-auto"><button className="btn btn-primary mx-auto">Go back</button></Link>
                    </div> 

         <div className="d-flex flex-column justify-content-center form-container">
            <div className="h4 text-center">Enter Contact Details</div>
            <div className="input-group">
                <span className="input-group-text">Name</span>
                <input value={contact.name} type="text" aria-label="name" className="form-control" onChange={(e)=> setContact({...contact,name:e.target.value})}/>
            </div>
            <div className="input-group">
                <span className="input-group-text">Phone</span>
                <input value={contact.phone} type="number" aria-label="phone" className="form-control" onChange={(e)=> setContact({...contact,phone:e.target.value})}/>
            </div>
            <div className="input-group">
                <span className="input-group-text">Email</span>
                <input value={contact.email} type="text" aria-label="email" className="form-control" onChange={(e)=> setContact({...contact,email:e.target.value})}/>
            </div>
            <div className="input-group">
                <span className="input-group-text">Address</span>
                <input value={contact.address} type="text" aria-label="address" className="form-control" onChange={(e)=> setContact({...contact,address:e.target.value})}/>
            </div> 
            <div  className="align-self-center mt-3"><button className="btn btn-primary"  onClick={handleAddContact}>Add</button></div>
            {
                display? <Alert message={message} alertType={'alert-success'}></Alert> : ''
            }                     
        </div>

        </>
        
)

    
}