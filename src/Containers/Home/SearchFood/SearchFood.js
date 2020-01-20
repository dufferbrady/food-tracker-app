import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import SearchBar from '../../../UI/SearchBar/SearchBar'

class SearchFood extends Component {
    state = {
        loading: false,
    }

    getFood = async e => {
        e.preventDefault();
        this.setState({ loading: true });
        const food = e.target.elements[0].value;
        this.setState({ loading: false });
        const queryParams = encodeURIComponent(food);
        console.log(queryParams);
        this.props.history.push({
            pathname: "/foodlist",
            search: `?food=${queryParams}`
        })
    }

    render() {
        return (
            <div>
                <SearchBar
                    variant={"outlined"}
                    placeholder={"Food Item"}
                    label={"Search for new food item"}
                    styling={{ 'width': '100%' }}
                    load={this.getFood} />
            </div>
        );
    }
}

export default withRouter(SearchFood);