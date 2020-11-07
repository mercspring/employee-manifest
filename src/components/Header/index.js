import React, { Component } from 'react';
import "./style.css";

export default class Header extends Component {
    render() {
        return (
            <div class="jumbotron jumbotron-fluid Header">
                <div class="container">
                    <h1 class="display-4 text-center">Employee Manifest</h1>
                    <p class="lead text-center">Use the Name and Date of Birth headings to sort by name and birthday. Use the search bar to search by name.</p>
                </div>
            </div>
        )
    }
}
