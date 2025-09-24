import { useEffect, useState } from "react";

const GlobalLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoaded = () => setIsLoaded(true);

    if (document.readyState === "complete") {
      // Already fully loaded
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handleLoaded, { once: true });
    }

    return () => {
      window.removeEventListener("load", handleLoaded);
    };
  }, []);

  if (isLoaded) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0b0b0b",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        color: "#fff",
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#ff9f43",
            animation: "glbBounce 0.8s infinite alternate ease-in-out",
          }}
        />
        <div style={{ 
          letterSpacing: 2, 
          fontSize: 24, 
          fontWeight: 300,
          textAlign: "center"
        }}>
          Loading site…
        </div>
      </div>
      <style>
        {`@keyframes glbBounce { from { transform: translateY(0) } to { transform: translateY(-10px) } }`}
      </style>
    </div>
  );
};

export default GlobalLoader;


