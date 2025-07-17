import { useState } from "react";
import { questions } from "../questions";

const Quiz = ({ onFinish }) => {
  const shuffled = questions.sort(() => 0.5 - Math.random()).slice(0, 5);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (opt) => {
    if (opt === shuffled[index].answer) setScore(score + 1);
    if (index + 1 < shuffled.length) setIndex(index + 1);
    else onFinish(score + (opt === shuffled[index].answer ? 1 : 0));
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-xl mb-4">{shuffled[index].question}</h2>
      <div className="grid gap-2">
        {shuffled[index].options.map((opt, i) => (
          <button
            key={i}
            className="bg-red-800 hover:bg-red-600 px-4 py-2 rounded"
            onClick={() => handleAnswer(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
