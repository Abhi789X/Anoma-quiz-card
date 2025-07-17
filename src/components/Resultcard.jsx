import html2canvas from "html2canvas";
import mage from "/mage.png";

const ResultCard = ({ name, score }) => {
  const getTitle = () => {
    if (score === 5) return "Anoma Master";
    if (score >= 3) return "Intent Initiate";
    return "Internet Mage";
  };

  const downloadCard = () => {
    const card = document.getElementById("card");
    html2canvas(card).then((canvas) => {
      const link = document.createElement("a");
      link.download = `${name}_anoma_card.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="flex flex-col items-center">
      <div
        id="card"
        className="p-6 w-80 rounded-xl bg-[#2c0000] shadow-lg border border-red-600 text-center relative"
      >
        <img src={mage} alt="Mage" className="w-32 mx-auto mb-4" />
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-300">Score: {score}/5</p>
        <h3 className="text-lg mt-2">{getTitle()}</h3>
      </div>
      <button
        onClick={downloadCard}
        className="mt-4 bg-red-700 hover:bg-red-800 px-4 py-2 rounded"
      >
        Download Card
      </button>
    </div>
  );
};

export default ResultCard;
