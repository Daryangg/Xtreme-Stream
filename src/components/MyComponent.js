import React, { Component } from 'react';

class MyComponent extends Component {

    render() {

        let rec = {
            name: 'Pizza',
            ingr: ['chesse', 'ham', 'tomatoes'],
            calories: 400
        };

        return (
            <div>
                <h1>{rec.name}</h1>
                <h2>{'Calories' + rec.calories}</h2>
                <ul>
                    {
                        rec.ingr.map((ing, i) => {
                            console.log(ing);

                            return (
                                <li key = {i}>
                                    {ing}
                                </li>
                            )
                        })

                    }
                </ul>
                <hr />
            </div>
        );
    }

}

export default MyComponent;