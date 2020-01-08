import React from 'react';

import TextField from '@material-ui/core/TextField';

const SearchBar = ({styling}) => {
    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField style={{...styling}} id="standard-basic" label="Standard" />
            </form>
        </div>
    );
};

export default SearchBar;