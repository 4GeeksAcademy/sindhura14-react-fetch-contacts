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
        console.log(action.payload);
      const contact = action.payload
      console.log(contact);
      console.log('store contact added');

      return {
        ...store,contacts:[...store.contacts,contact]
      }
      case 'contact/deleted':
        console.log('action-payload',action.payload)
        const id = action.payload;
        const remainingContacts = store.contacts.filter((contact) => contact.id !== id);
        console.log('id in store',id);
        console.log('in store contact deleted');
        console.log('remaining contact',remainingContacts);
        return {

          ...store,contacts:remainingContacts        }
    default:
      throw Error('Unknown action.');
  }    
}
