import React from 'react';
import BoardTopBar from './boardTopBar';

const cellStyle0 = {
    border: 'none',
    backgroundColor: '#FFA69E',
    borderRadius: '10px',
    width: '150px',
    height: '150px',
    lineHeight: '150px',
    textAlign: 'center',
};
const cellStyle1 = {
    border: 'none',
    backgroundColor: '#FFF38E',
    borderRadius: '10px',
    width: '150px',
    height: '150px',
    lineHeight: '150px',
    textAlign: 'center',
};
const cellStyle2 = {
    border: 'none',
    backgroundColor: '#81F0E5',
    borderRadius: '10px',
    width: '150px',
    height: '150px',
    lineHeight: '150px',
    textAlign: 'center',
};
const cellStyle3 = {
    border: 'none',
    backgroundColor: '#2F3061',
    borderRadius: '10px',
    width: '150px',
    height: '150px',
    lineHeight: '150px',
    textAlign: 'center',
};

export class AlcooBoard extends React.Component {
  onClick(id) {
    console.log(id);
  }

  render() {
    // let winner = '';
    // if (this.props.ctx.gameover) {
    //   winner =
    //     this.props.ctx.gameover.winner !== undefined ? (
    //       <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
    //     ) : (
    //       <div id="winner">Draw!</div>
    //     );
    // }

    const blankCell = {
        border: 'none',
        width: '150px',
        height: '150px',
        lineHeight: '150px',
        textAlign: 'center',
    };

    let body = [];
    let id = 0;
    //every row 
    for (let i = 0; i < 10; i++) {
      let cells = [];
      if (i % 2 === 0) {
          //non reversed regular order for rows 
        if (i % 4 === 0) {
            for (let j = 0; j < 7; j++) {
                const pos = 7 * i + j;
                let thisID = id;
                cells.push(
                <td style={returnCellStyle(thisID)} key={id} onClick={() => this.onClick(thisID)}>
                    {cells[pos]}
                </td>
                );
                id++;
            }            
        } else {
        // this is for assigning ID to the reverse rows (go from right to left)
        // disclaimer: this is an absolute shitshow don't ask us why the math works
        let tempID = id + 6;
        let thisID = tempID;
        for (let j = 0; j < 7; j++) {
            const pos = 7 * i + j;
            let thisfrID = thisID;
            cells.push(
            <td style={returnCellStyle(thisfrID)} key={id} onClick={() => this.onClick(thisfrID)}>
                {cells[pos]}
            </td>
            );
            thisID--;
        }
        id = tempID + 1;
    }   
    //odd rows where it needs to move down on the rightmost side
      } else if ((i - 1) % 4 === 0){ 
        for (let j = 0; j < 6; j++) {
            const pos = 7 * i + j;
            cells.push(
            <td style={blankCell}>
                {cells[pos]}
            </td>
            );
        }
        const pos = 7 * i + 6;
        let thisID = id;
        cells.push(
            <td style={returnCellStyle(thisID)} key={id} onClick={() => this.onClick(thisID)}>
                {cells[pos]}
            </td>
            );
            id++;
      }
    //odd rows where it needs to move down on the leftmost side 
      else {
        const pos = 7 * i;
        let thisID = id;
        cells.push(
            <td style={returnCellStyle(thisID)} key={id} onClick={() => this.onClick(thisID)}>
                {cells[pos]}
            </td>
            );
            id++;
        for (let j = 1; j < 7; j++) {
            const pos = 7 * i + j;
            cells.push(
            <td style={blankCell}>
                {cells[pos]}
            </td>
            );
        }
      }
      body.push(<tr key={i}>{cells}</tr>);
    }

    return (
        <div>
            <BoardTopBar/>
            <div className="board-div">
                <tbody>{body}</tbody>
                {/* {winner} */}
            </div>
        </div>
    );
  }
}

function returnCellStyle(id) {
    if (id % 4 === 0) {
        return cellStyle0;
    }
    if (id % 4 === 1) {
        return cellStyle1;
    }
    if (id % 4 === 2) {
        return cellStyle2;
    }
    if (id % 4 === 3) {
        return cellStyle3;
    }
}
export default AlcooBoard;