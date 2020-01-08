import React from 'react';

import classes from './Home.module.css';

import SearchBar from '../../UI/SearchBar/SearchBar';
import Header from '../Header/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div className={classes.Body}>
            <Header />
            <div className={classes.Home_Container}>
                <div className={classes.Home_Block}>
                    <span className={classes.Greeting1}>Hello, Andy <FontAwesomeIcon style={{color: '#339AF0'}} icon={faSmile} /></span>
                    <span className={classes.Greeting2}>Your daily calorie goal is <span className={classes.calorieGreen}>2,000</span></span>
                    <span className={classes.Greeting3}>So far today your calorie intake is <span className={classes.calorieRed}>0</span> calories</span>
                    <SearchBar styling={{ 'width': '100%' }} />
                </div>
            </div>
        </div>
    );
};

export default Home;