import React from 'react';
import EloService from "../services/EloService";
import TableContext from "./TableContext";
import {toTable} from "../lib/toTable";
class CurrentRating extends React.Component {

    constructor(props) {
        super(props);
        this.state = {teamID: '', date: ''};
        this.handleChangeTeamID = this.handleChangeTeamID.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChangeTeamID(event) {
        this.setState({teamID: event.target.value});
    }

    handleChangeDate(event) {
        this.setState({date: event.target.value});
    }

    handleSubmit() {
        return EloService.current(this.state.teamID, this.state.date)
    }

    handleClick() {
        return EloService.currentAll(this.state.date)
    }

    render() {
        return (
            <TableContext.Consumer>
                {
                    ({table,setTable}) => (
                        <div>
                            <form onSubmit={(event) => {event.preventDefault(); this.handleSubmit().then((response) => {setTable(toTable('Рейтинг на указанную дату',response.data))})}}>
                                <label>
                                    Рейтинг команды на указанную дату:&nbsp;
                                    <input type="text" placeholder="ID команды" value={this.state.teamID} onChange={this.handleChangeTeamID} />
                                    <input type="datetime-local" value={this.state.date} onChange={this.handleChangeDate} />
                                </label>
                                <input type="submit" value="Отправить" />
                                <button onClick={(event) => {event.preventDefault(); this.handleClick().then((response) => {setTable(toTable('Рейтинг на указанную дату',response.data))})}}>Для всех команд</button>
                            </form>
                        </div>
                    )
                }
            </TableContext.Consumer>
        );
    }
}

export default CurrentRating