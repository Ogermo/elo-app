import React from 'react';
import EloService from "../services/EloService";
import TableContext from "./TableContext";
import {toTable} from "../lib/toTable";
class Top extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        this.setState({date: event.target.value});
    }

    handleSubmit() {
        console.log(this.state.date)
        return EloService.top(this.state.date)
    }

    handleClick() {
        return EloService.topHistory()
    }

    render() {
        return (
            <TableContext.Consumer>
                {
                    ({table,setTable}) => (
                        <div>
                            <form onSubmit={(event) => {event.preventDefault(); this.handleSubmit().then((response) => {setTable(toTable('Лидер рейтинга на указанную дату',response.data))})}}>
                                <label>
                                    Лидер рейтинга на указанную дату:&nbsp;
                                    <input type="datetime-local" value={this.state.date} onChange={this.handleChange} />
                                </label>
                                <input type="submit" value="Отправить" />
                                <button onClick={(event) => {event.preventDefault(); this.handleClick().then((response) => {setTable(toTable('История лидеров',response.data))})}}>История лидеров</button>
                            </form>
                        </div>
                    )
                }
            </TableContext.Consumer>
        );
    }
}

export default Top