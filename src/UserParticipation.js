import React from 'react';
import PoolDisplay from './PollDisplay'; 




function UserParticipation(){
    function countVotes(votes){
        votes +=1;
    }
    return(
        <>
        <button onClick={countVotes(PoolDisplay.choices.votes)}>{PoolDisplay.choices.label}
        <span>{countVotes}</span>
        </button>
        </>
    )
}

export default UserParticipation;