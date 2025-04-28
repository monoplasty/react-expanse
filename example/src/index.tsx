import React, { useState } from "react";
import ReactDom from "react-dom";
import Expanse from "../../src/index";

function Demo() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  return (
    <div style={{ margin: "40px" }}>
      <button onClick={() => setShow(!show)}>点我点我</button>
      <Expanse show={show}>
        <div style={{ width: "400px", background: "#f2f2f2" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
            <div key={item}>{idx + 1} 这里是内容啊内容啊</div>
          ))}
        </div>
      </Expanse>

      <div>
        <hr />
      </div>
      <button onClick={() => setShow2(!show2)}>点我点我再点我</button>
      <Expanse show={show2}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
          <div key={item}>{idx + 1} 这里是内容啊内容啊</div>
        ))}
      </Expanse>

      <div>
        <hr />
      </div>
      <button onClick={() => setShow3(!show3)}>点我点我3</button>
      <Expanse show={show3}>
        <div style={{ width: "400px", background: "#f2f2f2" }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
            <div key={item}>{idx + 1} 这里是内容啊内容啊</div>
          ))}
        </div>
      </Expanse>
    </div>
  );
}

ReactDom.render(<Demo />, document.getElementById("app"));
