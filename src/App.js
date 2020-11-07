import Table from "./components/Table"
import Header from "./components/Header"
import React, { Component } from 'react'
import API from "./utils/API.js"
import dateFormating from "./utils/date.js";
import'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    searchTerm: "",
    sortState: ""

  }
  componentDidMount = () => {
    API.getEmployeeList().then(employees => {
      this.setState({ employees: employees.data.results, filteredEmployees: employees.data.results })
    });
  }
  nameOnClick = () => {
    let newFilteredEmployees;
    if (this.state.sortState != "sortedAlpha") {
      newFilteredEmployees = this.state.filteredEmployees.sort(this.sortLastAlpha);
      this.setState({ sortState: "sortedAlpha" })
    } else {
      newFilteredEmployees = this.state.filteredEmployees.sort(this.sortLastAlpha).reverse();
      this.setState({ sortState: "sortedAlphaReverse" })
    }

    this.setState({ filteredEmployees: newFilteredEmployees })
  }
  dobOnClick = () => {
    let newFilteredEmployees;
    if (this.state.sortState != "sortedDOB") {
      newFilteredEmployees = this.state.filteredEmployees.sort(dateFormating.sortDate);
      this.setState({ sortState: "sortedDOB" })
    } else {
      newFilteredEmployees = this.state.filteredEmployees.sort(dateFormating.sortDate).reverse();
      this.setState({ sortState: "sortedDOBReverse" })
    }

    this.setState({ filteredEmployees: newFilteredEmployees })
  }
  sortLastAlpha = (a, b) => {
    if (a.name.last < b.name.last) {
      return -1;
    }
    if (a.name.last > b.name.last) {
      return 1;
    }
    return 0;
  }

  searchOnChange = (event) => {

    const { name, value } = event.target;
    this.setState({
      [name]: value
    });

    const pattern = new RegExp(value, "i");
    console.log(pattern)
    console.log(value)

    if (value) {
      const filteredEmployees = this.state.employees.filter(elm => {
        const fullName = elm.name.first + " " + elm.name.last;
        return pattern.test(fullName);
      })
      this.setState({ filteredEmployees: filteredEmployees })
    } else {
      this.setState({ filteredEmployees: this.state.employees })
    }



  }
  render() {
    return (

      <div>
        <Header/>
          <form className="input-group mb-3">
            <input
              value={this.state.searchTerm}
              name="searchTerm"
              onChange={this.searchOnChange}
              type="text"
              placeholder="search by name"
              className="form-control"
            />
          </form>
        <Table employees={this.state.filteredEmployees} nameOnClick={this.nameOnClick} dobOnClick={this.dobOnClick}/>
      </div>
    )
  }
}


