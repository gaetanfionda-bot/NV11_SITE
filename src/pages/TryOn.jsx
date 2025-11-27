import { useParams } from "react-router-dom";

export default function TryOn() {
  const { ref } = useParams();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center py-10">

      <h1 className="text-3xl font-bold mb-6">ESSAYAGE : {ref}</h1>

      <model-viewer
        src={`/models/${ref}.glb`}
        alt="Try-on model"
        ar
        camera-controls
        auto-rotate
        poster="/placeholder_tryon.png"
        style={{
          width: "90%",
          height: "70vh",
          backgroundColor: "black",
        }}
      >
      </model-viewer>

    </div>
  );
}
