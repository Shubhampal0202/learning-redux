import React, { useState } from 'react'

function Bat() {
  const [bat, setBat] = useState(10);
  const [tosell, changeInBat] = useState("");
  const sellBat = () => {
    if ((bat - Number(tosell)) < 0) {
      alert(" Bats are out of stock");
      changeInBat("");
    } else {
      setBat(bat - Number(tosell));
      changeInBat("");
    }

  }
  const buyBat = () => {
    setBat(bat + Number(tosell));
    changeInBat("");
  }
  return (
    <>
      <h1>Bats</h1>
      <h2>No. of Bat {bat}</h2>
      <input type="text" value={tosell} onChange={(e) => { changeInBat(e.target.value) }} />
      <br />
      <button onClick={sellBat}>Sell Bat </button>
      <br />
      <button onClick={buyBat}>Buy Bat</button>
    </>
  )
}

export default Bat;