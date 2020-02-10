import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeData from "./EmployeeData.json";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState(EmployeeData);

function partTimeFilter(){
  
  let partTime = [];
  for (let i = 0; i < EmployeeData.length; i++){
    const employee = EmployeeData[i];
    if (employee.status === "PT"){
      partTime.push(employee);
      
    
    }
  }

  setCards(partTime)
  console.log(partTime)
  
  
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Directory</h1>
        <button type="sort-button" className="btn btn-warning" onClick = {()=> partTimeFilter() }>PT Employees Only</button>

      </header>
      <div className="Card">
      <Card
        id={EmployeeData[0].id}
        name={EmployeeData[0].name}
        department={EmployeeData[0].department}
        title={EmployeeData[0].title}
        salary={EmployeeData[0].salary}
        email={EmployeeData[0].email}
        status={EmployeeData[0].status}
        />
          <Card
        id={EmployeeData[1].id}
        name={EmployeeData[1].name}
        department={EmployeeData[1].department}
        title={EmployeeData[1].title}
        salary={EmployeeData[1].salary}
        email={EmployeeData[1].email}
        status={EmployeeData[1].status}
        />
          <Card
        id={EmployeeData[2].id}
        name={EmployeeData[2].name}
        department={EmployeeData[2].department}
        title={EmployeeData[2].title}
        salary={EmployeeData[2].salary}
        email={EmployeeData[2].email}
        status={EmployeeData[2].status}
        />
          <Card
        id={EmployeeData[3].id}
        name={EmployeeData[3].name}
        department={EmployeeData[3].department}
        title={EmployeeData[3].title}
        salary={EmployeeData[3].salary}
        email={EmployeeData[3].email}
        status={EmployeeData[3].status}
        />
          <Card
        id={EmployeeData[4].id}
        name={EmployeeData[4].name}
        department={EmployeeData[4].department}
        title={EmployeeData[4].title}
        salary={EmployeeData[4].salary}
        email={EmployeeData[4].email}
        status={EmployeeData[4].status}
        />
          <Card
        id={EmployeeData[5].id}
        name={EmployeeData[5].name}
        department={EmployeeData[5].department}
        title={EmployeeData[5].title}
        salary={EmployeeData[5].salary}
        email={EmployeeData[5].email}
        status={EmployeeData[5].status}
        />
          <Card
        id={EmployeeData[6].id}
        name={EmployeeData[6].name}
        department={EmployeeData[6].department}
        title={EmployeeData[6].title}
        salary={EmployeeData[6].salary}
        email={EmployeeData[6].email}
        status={EmployeeData[6].status}
        />
          <Card
        id={EmployeeData[7].id}
        name={EmployeeData[7].name}
        department={EmployeeData[7].department}
        title={EmployeeData[7].title}
        salary={EmployeeData[7].salary}
        email={EmployeeData[7].email}
        status={EmployeeData[7].status}
        />
          <Card
        id={EmployeeData[8].id}
        name={EmployeeData[8].name}
        department={EmployeeData[8].department}
        title={EmployeeData[8].title}
        salary={EmployeeData[8].salary}
        email={EmployeeData[8].email}
        status={EmployeeData[8].status}
        />
     
      
      </div>
    </div>
  );
}

export default App;
