
const RobotCommunication = ({width, commandsReceived}) => {
    return (
        <div>
            <textarea id="robotCommunication" placeholder="Please Movements File here..." style={{width}}></textarea>
            <button onClick={commandsReceived}>Go</button>
        </div>
    )
}

export default RobotCommunication
