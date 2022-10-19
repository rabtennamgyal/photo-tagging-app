// import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import Modal from "./components/modal";
import Body from "./components/body";

const firebaseConfig = {
  apiKey: "AIzaSyDzJIt9v_oEv0u4Pv-gCaWU0DO_FGRALRQ",
  authDomain: "photo-tagging-241c5.firebaseapp.com",
  projectId: "photo-tagging-241c5",
  storageBucket: "photo-tagging-241c5.appspot.com",
  messagingSenderId: "887035925496",
  appId: "1:887035925496:web:6a3851ad05abfed53e3c0d",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, "characters");

function App() {
  const [start, setStart] = useState(false);
  const [modal, setModal] = useState(true);
  const [menuShown, setMenuShown] = useState(true);
  const [coords, setCoords] = useState("");
  const [coords2, setCoords2] = useState("");
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [count, setCount] = useState(0);

  let minute = 0;
  let second = 0;
  let millisecond = 0;

  let cron;

  const charFound = (id) => {
    const popup = document.getElementById("popup");
    popup.style.display = "grid";
    const h1 = document.createElement("h1");
    h1.classList.add("thetext");
    h1.textContent = `${id} Found ✔.`;
    popup.appendChild(h1);

    const img = document.getElementById(id);
    img.style.opacity = "0.5";
  };

  const charNotFound = () => {
    const popup = document.getElementById("popup");
    popup.style.display = "grid";
    const h1 = document.createElement("h1");
    h1.textContent = `Try Again 😤`;
    h1.classList.add("thetext");
    popup.appendChild(h1);
  };

  const startGame = () => {
    setModal(false);
    setStart(true);
    startTimer();
  };

  const displayDropMenu = (e) => {
    // 1. Displays DropMenu Div
    setMenuShown((prevCheck) => !prevCheck);
    const dropDownMenu = document.getElementById("dropDownMenu");

    if (menuShown === true) {
      dropDownMenu.style.display = "flex";
      dropDownMenu.style.top = `${e.pageY < 2000 ? e.pageY : e.pageY - 200}px`;
      dropDownMenu.style.left = `${e.pageX < 1099 ? e.pageX : e.pageX - 200}px`;
    } else {
      dropDownMenu.style.display = "none";
      dropDownMenu.style.top = "0px";
      dropDownMenu.style.left = "0px";
    }

    // 2. Saves the Coords of the Click
    setCoords(e.pageX);
    setCoords2(e.pageY);
    setWidth(e.target.width);
    setHeight(e.target.height);
  };

  const checkImg = () => {
    let bulb;

    getDocs(colRef)
      .then((snapshot) => {
        let poke = [];
        snapshot.docs.forEach((doc) => {
          poke.push({
            ...doc.data(),
            id: doc.id,
          });
        });

        let data1 = poke[0].x.split(",").map((el) => Number(el));
        let data2 = poke[0].y.split(",").map((el) => Number(el));

        let diff = width - coords;
        let per = diff / width;

        let diff2 = height - coords2;
        let per2 = diff2 / height;

        let x = per.toFixed(2);
        let y = per2.toFixed(2);

        if (x >= data1[0] && x <= data1[1] && y >= data2[0] && y <= data2[1]) {
          setCount(count + 1);
          charFound("Bulbasaur");
        } else {
          charNotFound();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });

    setMenuShown((prevCheck) => !prevCheck);
    const dropDownMenu = document.getElementById("dropDownMenu");
    dropDownMenu.style.display = "none";
    dropDownMenu.style.top = "0px";
    dropDownMenu.style.left = "0px";
  };

  const checkImg2 = () => {
    let bulb;

    getDocs(colRef)
      .then((snapshot) => {
        let poke = [];
        snapshot.docs.forEach((doc) => {
          poke.push({
            ...doc.data(),
            id: doc.id,
          });
        });

        let data1 = poke[2].x.split(",").map((el) => Number(el));
        let data2 = poke[2].y.split(",").map((el) => Number(el));

        let diff = width - coords;
        let per = diff / width;

        let diff2 = height - coords2;
        let per2 = diff2 / height;

        let x = per.toFixed(2);
        let y = per2.toFixed(2);

        if (x >= data1[0] && x <= data1[1] && y >= data2[0] && y <= data2[1]) {
          setCount(count + 1);
          charFound("Croconaw");
        } else {
          charNotFound();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });

    setMenuShown((prevCheck) => !prevCheck);
    const dropDownMenu = document.getElementById("dropDownMenu");
    dropDownMenu.style.display = "none";
    dropDownMenu.style.top = "0px";
    dropDownMenu.style.left = "0px";
  };

  const checkImg3 = () => {
    let bulb;

    getDocs(colRef)
      .then((snapshot) => {
        let poke = [];
        snapshot.docs.forEach((doc) => {
          poke.push({
            ...doc.data(),
            id: doc.id,
          });
        });

        let data1 = poke[1].x.split(",").map((el) => Number(el));
        let data2 = poke[1].y.split(",").map((el) => Number(el));

        let diff = width - coords;
        let per = diff / width;

        let diff2 = height - coords2;
        let per2 = diff2 / height;

        let x = per.toFixed(2);
        let y = per2.toFixed(2);

        if (x >= data1[0] && x <= data1[1] && y >= data2[0] && y <= data2[1]) {
          setCount(count + 1);
          charFound("Slugma");
        } else {
          charNotFound();
        }
      })
      .catch((err) => {
        console.log(err.message);
      });

    setMenuShown((prevCheck) => !prevCheck);
    const dropDownMenu = document.getElementById("dropDownMenu");
    dropDownMenu.style.display = "none";
    dropDownMenu.style.top = "0px";
    dropDownMenu.style.left = "0px";
  };

  const startTimer = () => {
    clearInterval(cron);

    cron = setInterval(() => {
      timer();
    }, 10);
  };

  const timer = () => {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
    }

    document.getElementById("minute").innerText = returnData(minute);
    document.getElementById("second").innerText = returnData(second);
    document.getElementById("millisecond").innerText = returnData(millisecond);
  };

  const returnData = (input) => {
    return input > 10 ? input : `0${input}`;
  };

  
  if (count === 3) {
    const gameOver = document.getElementById("gameOver");
    const popup = document.getElementById("popup");
    //const h1 = document.querySelector('.thetext')

    popup.style.display = "none";
    // popup.removeChild(h1);
    gameOver.style.display = "block"; 
    clearInterval(cron);

    let min = document.getElementById("minute").textContent;
    let sec = document.getElementById("second").textContent;
    let mil = document.getElementById("millisecond").textContent;
    minute = min;
    second = sec;
    millisecond = mil;

    setTimeout(() => {
      minute = 0;
      second = 0;
      millisecond = 0;
      document.getElementById('minute').innerText = '00';
      document.getElementById('second').innerText = '00';
      document.getElementById('millisecond').innerText = '000';

      console.log(minute, second, millisecond)
    }, 2000)
  }


  return (
    <div className="app">
      {modal && <Modal startGame={startGame} />}
      {start && (
        <Body
          displayDropMenu={displayDropMenu}
          checkImg={checkImg}
          checkImg2={checkImg2}
          checkImg3={checkImg3}
          minute={minute}
          second={second}
          millisecond={millisecond}
        />
      )}
    </div>
  );
}

export default App;
