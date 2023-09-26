import React, { useEffect, useState } from "react";
import "./App.css";
import { phonebook } from "./../../data/phonebook";
import ContactCard from "../../components/ContactCard/ContactCard";

function App() {
  const [contact, setContacts] = useState(phonebook);
  const [searchTerm, setsearchTerm] = useState('');

  useEffect (()=>{
    const filteredContact = phonebook.filter((contact)=>{
      const name = contact.name.toLowerCase();
      const id = contact.id.toLowerCase();
      
      const query = searchTerm.toLowerCase();

    return name.includes(query) || id.includes(query);

    })
    setContacts(filteredContact); 
  },[searchTerm])

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow sticky-top" data-bs-theme="warning">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Search Magnet</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

      <div className="container">
        <h1 className="text-center mt-3">Search Magnet</h1>
        <div className="container w-50 mt-4 ">
        <input className="form-control input-box"
                type="search"
                placeholder="Search User Here"
                aria-label="Search" 
                 value={searchTerm}
                 onChange={(e) =>setsearchTerm(e.target.value)}/>
        </div>

        <div className="mt-2">
          {
          contact.map((contact, index) => {
            const {name, avatar, id} = contact;

            return (
                <>
                <div className="container ">
               <ContactCard key={index} name={name} avatar={avatar} id={id} />
                </div>
                
                </>
            );
          })
          }
        </div>
      </div>
      {

      contact.length === 0 ? <h2 className="text-center mt-2"> No Contact Founds 🤔</h2> : null
      }
    </>
  );
}

export default App;
