import React from 'react';

const VisitedTableData = props => {
    let color = '#2DCE89';
    if(props.arrow === 'arrow_downward'){
        color = '#FB6340'
    }
    return (
        <tr>
            <td>{props.page}</td>
            <td>{props.visitors}</td>
            <td>{props.users}</td>
            <td><i
                className={'material-icons ' + props.className} style={{
                    fontSize: '14px', display: 'inline-block', marginRight: '8px', fontWeight: 'bold', color: color
                }}
            >{props.arrow}</i>{props.rate}</td>
        </tr>
    )
}

export default VisitedTableData;