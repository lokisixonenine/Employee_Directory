import React from 'react';
//import 'bootstrap';

function Sort(props) {
    return (
        <div className = 'md-form mt-0 mx-auto bg-light'>
        <input placeholder = 'Search for an Employee' className = 'form-control'
        type = 'text' value={props.search} onChange={props.handleInputChange} name = 'search' id = 'search'></input>
        <h3 className = 'mx-auto'>Sort by Category</h3>
        <div>
        <button className = 'btn btn-outline-primary ml-4' type = 'button' onClick = {props.sortName}>
        </button>
        <button className = 'btn btn-outline-primary ml-4' type = 'button' onClick = {props.sortPosition}>
        Position</button>
        </div>
        </div>
    );
}

export default Sort;