import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Card from "../components/Card.jsx";
import AddContacts from "../components/AddContacts.jsx";
import { useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  console.log('home page render');
  console.log(store.contacts);

		useEffect(()=>{
			async function getUser(){
				const resp = await fetch("https://playground.4geeks.com/contact/agendas/Sandra");
				if(resp.ok){
					const data = await resp.json();
					dispatch({type:"slug/Loaded" , payload:data});

				}else {
					const resp = await fetch("https://playground.4geeks.com/contact/agendas/Sandra/", {
						method: "POST",
						headers: {
						  "Content-Type": "application/json"
						}
						});
						const data = await resp.json();
						dispatch({type:"slug/Loaded" , payload:data});
				}
			}
			getUser();
		},[])


		async function handleDeleteContact(id){
			console.log('contact_id',id);
			dispatch({ type:'contact/deleted' , payload:id})

				const resp = await fetch(`https://playground.4geeks.com/contact/agendas/Sandra/contacts/${id}`, {
				method: "DELETE",
				headers: {
				  "Content-Type": "application/json"
				}
				});
				if(resp.ok){
					console.log('done');
				}
		}
	return (
		<div className="d-flex flex-column mt-5 outer-container">
			<h1 className="mx-auto">{store.slug}</h1>
			<ul className="mx-auto list-group">
			{
                store.contacts && store.contacts.length ? 
				store.contacts.map(contact => {
					return   (
						<>	
							<Card contact={contact} deleteContact={() => handleDeleteContact(contact.id)}    key={contact.id} ></Card>
						</>
					)
                })
            :<li className="contact-list text-center">You have no contacts</li>
			}

			</ul>
			<AddContacts></AddContacts>	
		</div>
	);
}; 

