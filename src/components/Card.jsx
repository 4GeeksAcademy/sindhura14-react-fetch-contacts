import { Link } from "react-router-dom";

export default function Card({contact,deleteContact}){
    return (
        <>
        <li className="d-flex contact-list" key={contact.id}>			
        <p className="col-9"><Link to={`${contact.id}`} className="contact"><span>{contact.name}</span></Link></p>
        <p className="delete-button col-3"><button className="btn btn-primary delete-button" onClick={deleteContact}><i className="fa-solid fa-trash-can"></i></button>	</p>	 
        </li>
        </>

    )
}

