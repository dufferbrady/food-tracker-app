import React from 'react';

import TextField from '@material-ui/core/TextField';

const SearchBar = ({load, styling, label, placeholder, variant}) => {
    return (
        <div style={{width: '75%', marginTop: '20px'}}>
            <form onSubmit={load} noValidate autoComplete="off">
                <TextField variant={variant} style={{...styling}} placeholder={placeholder} id="standard-basic" label={label} />
            </form>
        </div>
    );
};

export default SearchBar;