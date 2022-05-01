import React, { createContext} from "react";

const TableContext = createContext(
    {
        table: <div>TABLE</div>,
        setTable : () => {}
    }
)
export default TableContext