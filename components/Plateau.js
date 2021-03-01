import PlateauSquare from './PlateauSquare';
import styles from '../styles/Plateau.module.css';

const things = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const Plateau = ({ rows, columns, robotLocation }) => {

    const rowsArray = Array(rows).fill(1).map((v, i) => i);
    const colsArry = Array(columns).fill(1).map((v, i) => i);

    return (
        <div className='container' style={{'--columns': columns}}>

            { rowsArray.map((r, i, a) => {
                return (colsArry.map(c => {
                    return <PlateauSquare key={`${r},${c}`} row={r} column={c} robotLocation={robotLocation} isBottomRow={r == rows-1}></PlateauSquare>
                }));
            })}
        </div>
    )
}

export default Plateau
