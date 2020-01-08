import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles({
        root: {
            background: '#339AF0'
        },
        flexBar: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        button: {
            fontFamily: 'Raleway, sans-serif',
            fontWeight: '600',
            color: 'white',
            letterSpacing: '1.2px'
        },
        icon: {
            fontSize: '30px'
        }
})

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar className={classes.root}>
            <Toolbar className={classes.flexBar}>
                <FontAwesomeIcon className={classes.icon} icon={faUtensils} />
                <Button className={classes.button}>
                    Sign Out
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;