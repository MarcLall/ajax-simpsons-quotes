import React from 'react'
import axios from 'axios'

class SimpsonsQuote extends React.Component {
    state = {
        character : '',
        image : '',
    }

    axiosSimpsons = () => {

        const url = 'https://simpsons-quotes-api.herokuapp.com/quotes'
        axios.get(url)
            .then (res => this.setstate({ character: res.data ,image: res.data })
            )
    }
/*
componentDidMount() {
    this.axiosSimpsons
}
*/

render () {
    return (
    // build block html
    <div class="container">
        <h1 class="title">${character}</h1>
        <div class="content" id="simpson"></div>
    </div>
    )
}
}
export default SimpsonsQuote
