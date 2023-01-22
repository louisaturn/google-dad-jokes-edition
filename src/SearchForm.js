import React from 'react';
import './SearchForm.css';

const SearchForm = (props) => {
    const onSubmit = (event) => {
        event.preventDefault();
        props.onFormSubmit();
    };

    return (
        <form onSubmit={onSubmit} className="search-form">
            <input
                type="text"
                placeholder="Enter search word!"
                onChange={(event) =>
                    props.onSearchValueChange(event.target.value)
                }
            />
            <div>
                <button disabled={props.isSearching}>Search</button>

                <button
                    onClick={props.onsSingleSearchClick}
                    disabled={props.isSearching}>
                    I'm feeling Funny
                </button>
            </div>
        </form>
    );
};

export default SearchForm;
