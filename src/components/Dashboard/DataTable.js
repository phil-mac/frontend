import React, { useState } from "react";

const DataTable = () => {
    const [data, setData] = useState([
        ['Categories', 'DataSet1'],
        ['Category1', 5],
        ['Category2', 5],
        ['Category3', 5],
        ['Category4', 5],
        ['Category5', 5]
    ]);

    function addNewCategory() {
        let newCategory = ['Category'];
        data[1].forEach((col, i) => {
            if (i > 0) {
                newCategory.push(5);
            }
        })
        setData(data => [...data, newCategory]);
    }

    function addNewDataSet() {
        console.log(data)
        const newData = data.map((arr, i) => {
            if (i === 0) {
                return [...arr, 'DataSet'];
            }
            return [...arr, 5]
        })
        setData(newData);
    }
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        {data[0].map((item, i) => {
                            return (
                                <th key={i+1}>{item}</th>
                            );
                        })}
                        <button onClick={addNewDataSet}>+</button>
                    </tr>
                </thead>
                <tbody>
                {data.map((arr, i) => {
                    if (i > 0) {
                        return (
                            <tr key={i+1}>
                                {arr.map((cell, j) => (<td key={(i+1) * j}>{cell}</td>))}
                            </tr>
                        );
                    }
                })}
                </tbody>
            </table>
            <button onClick={addNewCategory}>+ New Category</button>
        </div>
    );
}

export default DataTable;