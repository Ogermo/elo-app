import React from 'react';
import EloService from "../services/EloService";
import TableContext from "./TableContext";
import {toTable} from "../lib/toTable";
class MaxElo extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        return EloService.maxChange()
    }

    render() {
        return (
            <TableContext.Consumer>
                {
                    ({table,setTable}) => (
                        <div>
                            <button onClick={() => {this.handleClick().then((response) => {setTable(toTable('Максимальные изменения рейтинга',response.data))})}}>
                                Максимальные изменения рейтинга
                            </button>
                        </div>
                    )
                }
            </TableContext.Consumer>
        );
    }
}

export default MaxElo