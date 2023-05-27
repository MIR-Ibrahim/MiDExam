import React from 'react';

function PoolDisplay(){
    const question = "What is your favorite programming language?";
    const choices = [

        { "id": 1, "label": "JavaScript", "votes": 0 },
    
        { "id": 2, "label": "Python", "votes": 0 },
    
        { "id": 3, "label": "Java", "votes": 0 },
    
        { "id": 4, "label": "C#", "votes": 0 }
      ];

      function onClicked(votes){
        return votes+1;
      }


    return(
        <div><h2>Question: {question}</h2>
        for(const num of choices){
            <h3>`Id: ${num.id} | Language: ${num.label}.{onClicked(num.votes)} | Votes: ${num.votes}`</h3>
        }

        </div>
    )
}