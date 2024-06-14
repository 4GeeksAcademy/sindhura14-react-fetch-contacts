export const initialStore=()=>{
  return{
    slug:"",
    contacts:[]
}
};

export default function storeReducer(store, action = {}) {
  

  switch(action.type){
    case 'slug/Loaded':
      const { slug,contacts} = action.payload;
      return {
        ...store,slug:slug,contacts:contacts
      }

      case 'contact/added':
      const contact = action.payload
      return {
        ...store,contacts:[...store.contacts,contact]
      }

      case 'contact/deleted':
        const id = action.payload;
        const remainingContacts = store.contacts.filter((contact) => contact.id !== id);
        return {
          ...store,contacts:remainingContacts       
         }
    default:
      throw Error('Unknown action.');
  }    
}
