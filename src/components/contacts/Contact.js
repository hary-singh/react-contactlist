import { Component } from 'react';
// import React from 'react'
class Contact extends Component {
  render() {
    const { firstName, phone, id, removeContact } = this.props
    return(
      <div>
        <h1>{firstName}</h1>
        <h3>{phone}</h3>
        <button onClick={() => removeContact(id)}>
            Delete
        </button>
        <button>Edit</button>
      </div>
    )
  }
}
export default Contact;