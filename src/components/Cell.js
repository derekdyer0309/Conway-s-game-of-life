import React  from 'react'

export default function Cell(props){
    const select = () => {
        props.selectCell(props.row, props.column)
    }

    let color = 'ffffff'
    if (props.cellClass === 'alive') {
        color = (Math.floor(Math.random() * 20) * 100 + 156000).toString()
    }

    return(
        <div className={props.cellClass} id={props.id} onClick={select} style={{backgroundColor: "#" + color}}>

        </div>
    )
}