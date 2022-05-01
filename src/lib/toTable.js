import React from 'react';

//Used only for single tables
export function toTable(name,data){
        console.log(name,data)
        return  <div>
            <h1 className = "text-center"> {name}</h1>
            <table className = "table table-striped">
                <thead>
                <tr>
                    {
                        Object.keys(data[0]).map(
                            key =>
                                <td>{key}</td>
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
        </div>
}

//used if API returns list of lists
export function toTables(name,datas){
    console.log(name,datas)
    return  <div>
        <h1 className = "text-center"> {name}</h1>
        {
        datas.map( data =>
        <table className = "table table-striped">
            <thead>
            <tr>
                {
                    Object.keys(data[0]).map(
                        key =>
                            <td>{key}</td>
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