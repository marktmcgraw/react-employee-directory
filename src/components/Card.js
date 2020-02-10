import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Card(props){
  return (
    <div className="card mb-3">
      <div className="card-header">ID: {props.id}</div>
      <div className="card-body">
        <p className="card-title">Name: {props.name}</p>
        <p className="card-text">Department: {props.department}</p>
        <p className="card-text">Title: {props.title}</p>
        <p className="card-text">Salary: {props.salary}</p>
        <p className="card-text">E-mail: {props.email}</p>
        <div className="card-header">Status: {props.status}</div>
      </div>
    </div>
  )};


