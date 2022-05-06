import React from 'react';
import EloService from "../services/EloService";
import TableContext from "./TableContext";
import {toGraph} from "../lib/toGraph";
class History extends React.Component {

    constructor(props) {
        super(props);
        this.state = {teamID: '', json:  []};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({teamID: event.target.value});
    }

    handleSubmit() {
        return EloService.teamHistory(this.state.teamID)
    }

    render() {
        return (
            <TableContext.Consumer>
                {
                    ({table,setTable}) => (
                        <div>
                            <form onSubmit={(event) => {event.preventDefault(); this.handleSubmit().then((response) => {setTable(toGraph('Изменение рейтинга',response.data,"start_Dt","elo"))})}}>
                                <label>
                                    История изменения рейтинга для команды:&nbsp;
                                    <input type="text" value={this.state.teamID} onChange={this.handleChange} placeholder="ID команды"/>
                                </label>
                                <input type="submit" value="Отправить" />
                            </form>
                        </div>
                    )
                }
            </TableContext.Consumer>
        );
    }
}

export default History