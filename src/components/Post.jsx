export default function Post(props) {
    return (
      <div style={{ background: "#A9A9A9", borderRadius:'1%' }}>
        <div style={{}}>
          <h1>
            <b>{props.title}</b>
          </h1>
        </div>
        <div>
          <p>{props.text}</p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "10px",
            height:"50px"
          }}
        >
          {/* <img
            src={props.creator.image}
            
          /> */}
          {/* <p>{props.creator.name}</p> */}
        </div>
      </div>
    );
  }
  