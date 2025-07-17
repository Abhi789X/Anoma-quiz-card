import React from "react";

type Props = {
  name: string;
  score: number;
};

const ResultCard = ({ name, score }: Props) => {
  return (
    <div className="bg-white/5 p-4 rounded-2xl backdrop-blur-md shadow-lg w-full max-w-md mx-auto text-center border border-white/10">
      <div className="text-xl font-semibold mb-2 text-white">
        Wallet Risk Score
      </div>
      <div className="text-4xl font-bold text-pink-400 mb-4">{score}</div>
      <div className="text-sm text-white/70">for {name}</div>
    </div>
  );
};

export default ResultCard;
