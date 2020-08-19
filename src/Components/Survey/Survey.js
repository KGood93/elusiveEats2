/* Survey asks basic questions and sends query to expernal API
    Considering: Google, Yelp, Zomato
    Once data is returned it is set to EE API
*/

import React, {Component} from 'react'
import './Survey.css'


class Survey extends Component {

render() {

    return (
        <div className="survey">
            <h2 className="surveyQuestion">What style of restaurant are you looking for?</h2>
                Check box question 
            <h2 className="surveyQuestion">How much are you willing to spend?</h2>
                Check box question 
        </div>
    )
}

}

export default Survey