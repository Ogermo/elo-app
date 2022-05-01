import React from 'react';
import EloService from "../services/EloService";
import TableContext from "./TableContext";
import {toTable} from "../lib/toTable";
class MaxElo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {matchID: '', json:  []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({matchID: event.target.value});
    }

    handleClick(){
        return EloService.maxAll()
    }

    handleSubmit() {
        return EloService.max(this.state.matchID)
    }

    render() {
        return (
            <TableContext.Consumer>
                {
                    ({table,setTable}) => (
                        <div>
                            <form onSubmit={(event) => {event.preventDefault(); this.handleSubmit().then((response) => {setTable(toTable('Изменение рейтинга',response.data))})}}>
                                <label>
                                    Максимальный рейтинг за все время для команды:
                                    <input type="text" value={this.state.matchID} onChange={this.handleChange} />
                                </label>
                                <input type="submit" value="Отправить" />
                                <button onClick={() => {this.handleClick().then((response) => {setTable(toTable('Max Elo',response.data))})}}>
                                    Показать для всех команд
                                </button>
                            </form>
                        </div>
                    )
                }
            </TableContext.Consumer>
        );
    }
}

export default MaxElo