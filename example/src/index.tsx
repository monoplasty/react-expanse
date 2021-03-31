import React, { useState } from "react";
import ReactDom from "react-dom";
import Expanse from "../../src/index";

function Demo() {
  const [show, setShow] = useState(false);
  return (
    <div style={{margin: "40px"}}>
      <button onClick={() => setShow(!show)}>点我点我</button>
      <Expanse show={show}>
        <div style={{ width: "400px", background: "#f2f2f2" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item}>这里是内容啊内容啊</div>
          ))}
        </div>
      </Expanse>
    </div>
  );
}

ReactDom.render(<Demo />, document.getElementById("app"));
