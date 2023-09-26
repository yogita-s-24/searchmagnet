import React from "react";
import "./ContactCard.css";

export default function ContactCard({ avatar, name, id }) {
  return (
    <>
      <div className="container w-50">
        <div className="container d-flex justify-content-center align-items-center py-2 rounded-2 shadow contact-card">
            <img
              src={avatar}
              alt=""
              className=" p-2 bg-light"
              style={{
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "#F5F9FF",
                  border: "3px solid #005B40",
                }}
            />
      
          
          <div className="container">
          <h5>Name : {name}</h5>
          <h6>ID : {id}</h6>

          </div>
        </div>
      </div>
    </>
  );
}
