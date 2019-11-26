import React from 'react';
import { connect } from 'react-redux';
import { getSearchResults } from './action';
import './style.css';
import { MDBCol } from "mdbreact";
import garfield from './gfield.gif';

function Search(props) {
    return (
        <div className='SearchWrapper'>
            <img className='image' src={garfield} />
            <MDBCol md="6">
                <div className="active-orange-3 active-orange-4 mb-4">
                    <input
                        className="form-control" type="text" placeholder="Search" aria-label="Search"
                        onChange={ e => onInputChange(e, props) }
                    />
                </div>
            </MDBCol>
        </div>
    );
}

async function onInputChange(e, props) {
    if(e.target.value.trim() !== '') {
        props.getSearchResults(e.target.value);
    }
}

const mapDispatchToProps = {
    getSearchResults
};

export default connect(null, mapDispatchToProps)(Search);