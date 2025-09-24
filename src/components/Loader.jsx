import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          padding: "8px 12px",
          background: "rgba(0,0,0,0.6)",
          color: "#fff",
          borderRadius: 8,
          fontSize: 14,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
          letterSpacing: 0.3,
          userSelect: "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)"
        }}
      >
        Loading… {Math.round(progress)}%
      </div>
    </Html>
  );
};

export default Loader;


