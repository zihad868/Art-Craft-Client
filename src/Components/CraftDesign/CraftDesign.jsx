import { Typewriter } from "react-simple-typewriter";

const CraftDesign = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center">
        {" "}
        <span className="text-green-400">Creative</span>{" "}
        <span style={{ color: "red", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["Craft Design"]}
            loop={5}
            cursor
            cursorStyle=""
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h2>

      <div className="m-8 grid grid-cols-3 gap-4">
      <img src={`https://i.ibb.co/FzqDLfQ/premium-photo-1675719071705-5f338a1c9349-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg`} alt="" />
      <img src={`https://i.ibb.co/z2LnHxx/premium-photo-1661762381491-c26ed1f25ad3-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-cro.jpg`} alt="" />
      <img src={`https://i.ibb.co/YcqB2zq/photo-1535837487710-a191373a20ae-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg`} alt="" />
      <img src={`https://i.ibb.co/xmxLD0H/photo-1497048679117-1a29644559e3-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg`} alt="" />
      <img src={`https://i.ibb.co/556VDT4/photo-1491245338813-c6832976196e-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces.jpg`} alt="" />
      <img src={`https://i.ibb.co/BwC1XvY/photo-1560421683-6856ea585c78-blend-000000-blend-alpha-10-blend-mode-normal-blend-w-1-crop-faces-edg.jpg`} alt="" />
      </div>
    </div>
  );
};

export default CraftDesign;
