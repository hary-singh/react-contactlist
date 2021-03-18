import Contact from './Contact';
// const ContactList = () => (
//   <>
//   </>
// )
// const ContactList = (props) => {
//   props.contacts
const ContactList = ({ contacts, removeContact }) => {
  return (
    <>
      {
        contacts.map( c => (
          // <div>
          //   <h1>{c.firstName}</h1>
          //   <h3>{c.phone}</h3>
          //   <button>Delete</button>
          // </div>
          <Contact {...c} removeContact={removeContact} />
          // <Contact id={c.id} firstName={c.firstName} phone={c.phone} age={c.age} />
        ))
      }
    </>
  )
}
export default ContactList;