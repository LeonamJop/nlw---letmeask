import copyImg from '../assets/images/copy.svg'

import "../styles/room-code.scss"

type RoomCodeProps = {
    code: string;
}


export function RoomCode(props: RoomCodeProps) {
    function copyRoomCodeToclipboard(){
        navigator.clipboard.writeText(props.code)
    }

    return(
        <button className="room-code" onClick={copyRoomCodeToclipboard}>
            <div>
                <img src={copyImg} alt="copy"/>
            </div>
            <span>Sala #{props.code}</span>
        </button>
    )
}