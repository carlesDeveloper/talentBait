import React, { createContext, useState, useEffect } from 'react'
const JsonData = require("../shop_data.json")
export const DataContext = createContext()

const DataProvider = (props) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
          try {
            setData(JsonData);
          } catch (error) {
            console.error('Error:', error);
          }
        };
      
        fetchData();
    }, []);


    const addData = (newData) => {

    }

    return(
        <DataContext.Provider
            value={{
                data, addData
            }}
        >
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;