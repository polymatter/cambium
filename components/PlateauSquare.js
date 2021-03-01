import styles from '../styles/Plateau.module.css';
import { FaArrowCircleUp, FaArrowCircleDown, FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

const PlateauSquare = ({ column, robotLocation, row, isBottomRow }) => {

    const isRobotHere = robotLocation.row == row && robotLocation.column == column;
    const squareLeft = column == 0 ? ' square-left ' : '';
    const squareBottom = isBottomRow ? ' square-bottom' : '';

    return (
        <div className={'square ' + squareLeft + squareBottom}>
            { isRobotHere && robotLocation.direction == 'N' && <FaArrowCircleUp style={{width: "100px", height: "100px"}} /> }
            { isRobotHere && robotLocation.direction == 'S' && <FaArrowCircleDown style={{width: "100px", height: "100px"}}/> }
            { isRobotHere && robotLocation.direction == 'E' && <FaArrowCircleRight style={{width: "100px", height: "100px"}}/> }
            { isRobotHere && robotLocation.direction == 'W' && <FaArrowCircleLeft style={{width: "100px", height: "100px"}} /> }
        </div>
    )
}

export default PlateauSquare
