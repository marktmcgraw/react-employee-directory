import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Card(props){
  return (
    <div class="card mb-3">
      <div class="card-header">ID: {props.id}</div>
      <div class="card-body">
        <h5 class="card-title">Name: {props.name}</h5>
        <p class="card-text">Department: {props.department}</p>
        <p class="card-text">Title: {props.title}</p>
        <p class="card-text">Salary: {props.salary}</p>
        <p class="card-text">E-mail: {props.email}</p>
      </div>
    </div>
  )};


