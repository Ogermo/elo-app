import React from 'react';
import MatchService from '../services/MatchService';



class Calculate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'Подсчитать эло'};

        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({text: 'Считаем'});
        MatchService.calculate().then((response) => {
            console.log(response)
            this.setState({ text: response.data})
        })
    }

    render() {
        return (
            <div>
                Подсчитать эло:&nbsp;
                <button onClick={this.handleClick}>
                    {this.state.text}
                </button>
            </div>

        );
    }
}

export default Calculate