import { useNavigate } from "react-router-dom";

const BoardCard = ({board}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        //navigate(`/workspace/${workspace.id}`)
    }

    return (
        <button className="boardCard" onClick={handleClick}>
            <h1>{board.name}</h1>
        </button>
    )
}

export default BoardCard;