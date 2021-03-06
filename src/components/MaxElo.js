import React from 'react';
import EloService from "../services/EloService";
import TableContext from "./TableContext";
import {toTable} from "../lib/toTable";
class MaxElo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {teamID: '', json:  []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({teamID: event.target.value});
    }

    handleClick(){
        return EloService.maxAll()
    }

    handleSubmit() {
        return EloService.max(this.state.teamID)
    }

    render() {
        return (
            <TableContext.Consumer>
                {
                    ({table,setTable}) => (
                        <div>
                            <form onSubmit={(event) => {event.preventDefault(); this.handleSubmit().then((response) => {setTable(toTable('Изменение рейтинга',response.data))})}}>
                                <label>
                                    Максимальный рейтинг за все время для команды:&nbsp;
                                    <input type="text" value={this.state.teamID} onChange={this.handleChange} placeholder="ID команды"/>
                                </label>
                                <input type="submit" value="Отправить" />
                                <button onClick={() => {this.handleClick().then((response) => {setTable(toTable('Max Elo',response.data))})}}>
                                    Для всех команд
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