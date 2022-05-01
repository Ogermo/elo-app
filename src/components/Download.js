import React from 'react';
import MatchService from '../services/MatchService';



class Download extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: 'Загрузить матчи с сервиса'};

        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault()
        this.setState({text: 'Загружаем'});
        MatchService.download().then((response) => {
            this.setState({ text: response.data})
        })
    }

    render() {
        return (
            <div>
                Загрузить матчи:&nbsp;
                <button onClick={this.handleClick}>
                    {this.state.text}
                </button>
            </div>
        );
    }
}

export default Download