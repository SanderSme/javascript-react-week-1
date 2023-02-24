import "../App.css"

const VotingBtn = ({handleVotes, name}) => {
  return (
    <div className="VotingBtn">
        <button onClick={() => handleVotes(name)}>Vote for {name}</button>
    </div>
  );
}

export default VotingBtn