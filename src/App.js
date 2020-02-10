import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeData from "./EmployeeData.json";
import Card from "./components/Card";

function App() {
  // const [cards, setCards] = useState(employees);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Directory</h1>
      </header>
      <div className="Card">
      <Card
        id={EmployeeData[0].id}
        name={EmployeeData[0].name}
        department={EmployeeData[0].department}
        title={EmployeeData[0].title}
        salary={EmployeeData[0].salary}
        email={EmployeeData[0].email}
        />
          <Card
        id={EmployeeData[1].id}
        name={EmployeeData[1].name}
        department={EmployeeData[1].department}
        title={EmployeeData[1].title}
        salary={EmployeeData[1].salary}
        email={EmployeeData[1].email}
        />
          <Card
        id={EmployeeData[2].id}
        name={EmployeeData[2].name}
        department={EmployeeData[2].department}
        title={EmployeeData[2].title}
        salary={EmployeeData[2].salary}
        email={EmployeeData[2].email}
        />
          <Card
        id={EmployeeData[3].id}
        name={EmployeeData[3].name}
        department={EmployeeData[3].department}
        title={EmployeeData[3].title}
        salary={EmployeeData[3].salary}
        email={EmployeeData[3].email}
        />
          <Card
        id={EmployeeData[4].id}
        name={EmployeeData[4].name}
        department={EmployeeData[4].department}
        title={EmployeeData[4].title}
        salary={EmployeeData[4].salary}
        email={EmployeeData[4].email}
        />
          <Card
        id={EmployeeData[5].id}
        name={EmployeeData[5].name}
        department={EmployeeData[5].department}
        title={EmployeeData[5].title}
        salary={EmployeeData[5].salary}
        email={EmployeeData[5].email}
        />
          <Card
        id={EmployeeData[6].id}
        name={EmployeeData[6].name}
        department={EmployeeData[6].department}
        title={EmployeeData[6].title}
        salary={EmployeeData[6].salary}
        email={EmployeeData[6].email}
        />
          <Card
        id={EmployeeData[7].id}
        name={EmployeeData[7].name}
        department={EmployeeData[7].department}
        title={EmployeeData[7].title}
        salary={EmployeeData[7].salary}
        email={EmployeeData[7].email}
        />
          <Card
        id={EmployeeData[8].id}
        name={EmployeeData[8].name}
        department={EmployeeData[8].department}
        title={EmployeeData[8].title}
        salary={EmployeeData[8].salary}
        email={EmployeeData[8].email}
        />
     
      
      </div>
    </div>
  );
}

export default App;
