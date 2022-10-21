
function Scoreboard({ setShowScore, setModal }) {
    const goHome = () => {
        setShowScore(false);
        setModal(true);
    };

    return (
        <div className="scoreboard">
            <div className="header">
                <h1>
                    Scoreboard
                </h1>

                <button onClick={goHome}>
                    Home
                </button>
            </div>

            <div className="scores">
                <div className="userInfo">
                    <h1>
                        Position
                    </h1>

                    <h1>
                        Username
                    </h1>

                    <h1>
                        Time
                    </h1>
                </div>

                <div className="userData" id='userData'>

                </div>
            </div>
        </div>
    )
};

export default Scoreboard;