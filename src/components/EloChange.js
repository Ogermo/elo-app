import React from 'react';
import EloService from "../services/EloService";
import TableContext from "./TableContext";
import {toTable} from "../lib/toTable";
class EloChange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {matchID: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({matchID: event.target.value});
    }

    handleSubmit() {
        return EloService.eloChange(this.state.matchID)
    }

    render() {
        return (
            <TableContext.Consumer>
                {
                    ({table,setTable}) => (
                        <div>
                            <form onSubmit={(event) => {event.preventDefault(); this.handleSubmit().then((response) => {setTable(toTable('Изменение рейтинга',response.data))})}}>
                                <label>
                                    Изменение рейтинга после матча:
                                    <input type="text" value={this.state.matchID} onChange={this.handleChange} />
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

export default EloChange