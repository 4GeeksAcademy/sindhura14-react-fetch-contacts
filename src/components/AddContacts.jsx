import useGlobalReducer from "../hooks/useGlobalReducer";
import { useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";



export default function AddContacts(){
    return (
        <Link to="form" className="mx-auto mt-3">
                 <button type="button" className="btn btn-primary mx-auto">Add New Contact</button>
        </Link>

    )
}