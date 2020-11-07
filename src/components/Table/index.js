import React, { Component } from 'react'
import dateFormating from "../../utils/date.js";
import "./style.css";

export default class Table extends Component {


    render() {
        return (

            <div className="Table">
                <table className="table">
                    <thead>
                        <tr id="table-heading">
                            <th id="name-heading" onClick={() => this.props.nameOnClick()}>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th id="dob-heading" onClick={() => this.props.dobOnClick()}>DOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.employees.map((elm, index) => {
                            return (<tr key={index}>
                                <td>{elm.name.first + " " + elm.name.last}</td>
                                <td>{elm.email}</td>
                                <td>{elm.cell} </td>
                                <td>{dateFormating.formatDate(elm.dob.date)}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
