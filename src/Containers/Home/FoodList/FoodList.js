import React, { Component } from 'react';

class FoodList extends Component {

    state = {
        foodItem: null,
        searchResults: null
    }

    componentDidMount() {
        let foodItem = this.props.location.search.substr(6);
        this.getFoodListHandler(foodItem);
    }

    getFoodListHandler = foodItem => {
        const APPLICATIONKEY = '5720710aab19037bde018f2c43447f5c';
        const APPLICATIONID = '0472f4a4';
        fetch(`https://api.edamam.com/api/food-database/parser?ingr=${foodItem}&app_id=${APPLICATIONID}&app_key=${APPLICATIONKEY}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.hints)
                this.setState({searchResults: data.hints})
            })
    }

    render() {
        let foodResults = null;
        if(this.state.searchResults) {
            foodResults = this.state.searchResults.map(foodItem => (
                <div>
                    {foodItem.food.label}
                </div>
            ))

        }
        return (
            <div>
                {foodResults}
            </div>
        );
    }
}

export default FoodList;