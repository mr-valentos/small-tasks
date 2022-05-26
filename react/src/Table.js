import React from 'react';

const alpha = 'abcdefghijklmnopqrstuvwxyz';

export default function Table(props) {
	let {columns, rows, cell, data} = props;

    let table = [];
    let header = [];
    let colStart;
    let rowStart;
    if (cell){
        colStart = alpha.indexOf(cell.slice(0, 1));
        rowStart = cell.slice(1) - 1;
    }

    for (let i = 0; i < columns; i++){
        header.push(alpha[i].toUpperCase());
    }

    for (let i = 0; i < rows; i++){
        let row = [];
        table.push(row);
        for (let j = 0; j < columns; j++){
            let value = '';
            if (i >= rowStart && j >= colStart){
                value = data[i - rowStart][j - colStart]
            }
            table[i].push(value);
        }
    }

	return (
		<table>
			<thead>
			<tr>
                <th></th>
                {header.map(i => <th>{i}</th>)}
			</tr>
			</thead>

			<tbody>
                {table.map((item, i) => (
                    <tr> 
                        <th>{i+1}</th>           
                        {item.map((value) => (
                            <td>
                            <input type="text" value={value}/>
                            </td>)
                        )}
                    </tr>
                )
                )}
			</tbody>
		</table>
	);
};