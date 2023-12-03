// WordDetails.js
import React from 'react';
import { useSelector } from 'react-redux';

const WordDetails = () => {
  const wordDetails = useSelector((state) => state.wordDetails);
  console.log(wordDetails)
  return (
    <div>
      {wordDetails ? (
        <div>
          <h2>{wordDetails.word} /Noun/</h2>
          <p>Definition :{wordDetails.meanings[0].definitions[0].definition}</p>
         <p>Synonyms:{wordDetails.meanings[0].synonyms[0]}</p>
        </div>
      ) : (
        <p>No word details available</p>
      )}
    </div>
  );
};

export default WordDetails;
