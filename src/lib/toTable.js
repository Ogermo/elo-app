import React from 'react';

//Translate variable names to more readable for table
const dictionary = {
    start_Dt: 'Время матча',
    elo: 'Эло',
    matchID: 'ID матча',
    teamID: 'ID команды',
    previous_elo: 'Предыдущий эло',
    diff: 'Разница эло',
    eloPrev: 'Предыдущий эло',
    eloNow: 'Текущий эло'
}

//Used only for single tables

export function toTable(name,data){
        console.log(name,data)
        return  <div>
            <h2 className = "text-center"> {name}</h2>
            <table className = "table table-striped">
                <thead>
                <tr className="row row-head">
                    {
                        Object.keys(data[0]).map(
                            key =>
                                <td className="cell cell-head">{dictionary[key]}</td>
                        )
                    }
                </tr>
                </thead>
                <tbody>
                {
                    data.map(
                        elo =>
                            <tr className="row">
                                { Object.entries(elo).map(
                                    value =>
                                        <td className="cell">{value[1]}</td>
                                )
                                }
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
}

//used if API returns list of lists
export function toTables(name,datas){
    console.log(name,datas)
    return  <div>
        <h2 className = "text-center"> {name}</h2>
        {
        datas.map( data =>
        <table className = "table table-striped">
            <thead>
            <tr>
                {
                    Object.keys(data[0]).map(
                        key =>
                            <td>{dictionary[key]}</td>
                    )
                }
            </tr>
            </thead>
            <tbody>
            {
                data.map(
                    elo =>
                        <tr>
                            { Object.entries(elo).map(
                                value =>
                                    <td>{value[1]}</td>
                            )
                            }
                        </tr>
                )
            }
            </tbody>
        </table>
        )}
    </div>
}