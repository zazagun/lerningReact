import React, { useState } from "react";

const App = () => {
  let [followers, setFollowers] = useState(0)

  function DecrimEncrim(plusOrMinus){
    if(plusOrMinus === 0 && followers > 0){
      setFollowers(followers - 1)
    }else if(plusOrMinus === 1){
      setFollowers(followers + 1)
    }
    console.log(followers)
  }

  return (
    <>
      <button onClick={() => DecrimEncrim(1)}>Инкримент</button>
      <button onClick={() => DecrimEncrim(0)}>Дикримент</button>

      <div>
        <h3>{followers}</h3>
      </div>
    </>
  )
}

export default App;
