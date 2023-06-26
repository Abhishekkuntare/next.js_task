export const DataDisplay = ({ info }) => {
  const saveData = async (uni) => {
    console.log(uni);
    const res = await fetch(
      "https://nextauth-400d2-default-rtdb.firebaseio.com/openAiData.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uni,
        }),
      }
    );
    if (res) {
      alert("data store");
    } else {
      alert("Not data");
    }
  };

  return (
    <div>
      <h1
        style={{
          marginTop: "30px",
        }}
      >
        Saved data into the Firebase:
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          flexDirection: "column",
        }}
      >
        {info.map((item) => (
          <div key={item.id}>
            <h1>{item.id}</h1>
            <button
              style={{
                fontSize: "20px",
                borderRadius: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                outline: "none",
                padding: "30px",
                width: "200px",
                height: "40px",
                backgroundColor: "#4FFBDF",
                color: "black",
                cursor: "pointer",
              }}
              onClick={() => saveData(item.id)}
            >
              Save Data{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
