import Link from "next/link";

export default function Page() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <button
        style={{
          fontSize: "20px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          outline: "none",
          padding: "30px",
          width: "300px",
          height: "40px",
          backgroundColor: "white",
          color: "black",
          cursor: "pointer",
        }}
      >
        <Link
          style={{
            fontFamily: "monospace",
          }}
          href="/login"
        >
          Go to the Login Page
        </Link>
      </button>
    </div>
  );
}
