import BoardCard from "./boardCard";

const AddBoardButton = ({handleOpen, board}) => {
    return (
        <>
            {board.id === -1 &&
                <button className="addBoardButton" onClick={handleOpen}>
                    <h1>Criar novo quadro</h1>
                </button>
            }
            {
                board.id !== -1 && <BoardCard board={board}/>
            }
        </>
    )
}

export default AddBoardButton;