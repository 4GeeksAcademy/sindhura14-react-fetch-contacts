import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export default function ContactDetails(){
    const {store,dispatch} = useGlobalReducer();
    const {id}= useParams();
    const contact = store.contacts.find((contact)=>contact.id == id);


    return (
      <>
            <div className="card contact-container mb-3">
          <div className="card-header text-center">{contact.name}</div>
           <div className="card-body">
           <p className="card-text"><span>Phone :</span> {contact.phone}</p>
            <p className="card-text"><span>Email :</span> {contact.email}</p>
            <p className="card-text"><span>Address :</span> {contact.address}</p>
          </div>
          <Link to="/" className="text-center"><button className="btn btn-primary mx-auto">Go back</button></Link>

              </div> 
      </>
     
    )
}