import { useState } from "react";
import NameInput from "./components/NameInput";
import Quiz from "./components/Quiz";
import ResultCard from "./components/ResultCard";
import "../style.css";

const App = () => {
  const [step, setStep] = useState("start");
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  const handleStart = (userName) => {
    setName(userName);
    setStep("quiz");
  };

  const handleFinish = (finalScore) => {
    setScore(finalScore);
    setStep("result");
  };

  return (
    <div className="min-h-screen bg-[#1a0000] text-white flex items-center justify-center">
      {step === "start" && <NameInput onStart={handleStart} />}
      {step === "quiz" && <Quiz onFinish={handleFinish} />}
      {step === "result" && <ResultCard name={name} score={score} />}
    </div>
  );
};

export default App;
