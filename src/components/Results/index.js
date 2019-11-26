import React from 'react';
import { connect } from 'react-redux';
import Result from './Result';

function Results(props) {
    if (props.searchResults){
        return (
            <div className='SearchResults'>
                {renderSearchResults(props.searchResults)}
            </div>
        )
    }
    return null;
}

const renderSearchResults = searchResults => {
    return searchResults.map((result, i) => {
        return <Result i={ i } result = { result } />
    })
};

const mapStateToProps = state => {
    return {
        searchResults: state.search.get('searchResults')
    }
};

export default connect(mapStateToProps)(Results);