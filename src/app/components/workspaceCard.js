import { useNavigate } from "react-router-dom";

const WorkspaceCard = ({workspace}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/workspace/${workspace.id}`)
    }

    return (
        <button className="workspaceCard" onClick={handleClick}>
            <h1>{workspace.name}</h1>
        </button>
    )
}

export default WorkspaceCard;