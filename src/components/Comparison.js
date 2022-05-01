import React from 'react';
import EloService from "../services/EloService";
import TableContext from "./TableContext";
import {toTables} from "../lib/toTable";
class Comparison extends React.Component {

    constructor(props) {
        super(props);
        this.state = {teamID: '', date1: '', date2: ''};
        this.handleChangeTeamID = this.handleChangeTeamID.bind(this);
        this.handleChangeDate1 = this.handleChangeDate1.bind(this);
        this.handleChangeDate2 = this.handleChangeDate2.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChangeTeamID(event) {
        this.setState({teamID: event.target.value});
    }

    handleChangeDate1(event) {
        this.setState({date1: event.target.value});
    }

    handleChangeDate2(event) {
        this.setState({date2: event.target.value});
    }

    handleSubmit() {
        return EloService.compare(this.state.date1,this.state.date2,this.state.teamID)
    }

    handleClick(){
        return EloService.compareAll(this.state.date1,this.state.date2)
    }

    render() {
        return (
            <TableContext.Consumer>
                {
                    ({table,setTable}) => (
                        <div>
                            <form onSubmit={(event) => {event.preventDefault(); this.handleSubmit().then((response) => {setTable(toTables('Сравнение команд',response.data))})}}>
                                <label>
                                    Показатели рейтинга на две указанные даты :
                                    <input type="text" value={this.state.date1} onChange={this.handleChangeDate1} />
                                    <input type="text" value={this.state.date2} onChange={this.handleChangeDate2} />
                                    <input type="text" value={this.state.teamID} onChange={this.handleChangeTeamID} />
                                </label>
                                <input type="submit" value="Отправить" />
                            </form>
                            <button onClick={() => {this.handleClick().then((response) => {setTable(toTables('Сравнение всех команд',response.data))})}}>
                                Показать для всех команд
                            </button>
                        </div>
                    )
                }
            </TableContext.Consumer>
        );
    }
}

export default Comparison