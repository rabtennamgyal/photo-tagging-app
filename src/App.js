import firebase from 'firebase/compat/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useState } from "react";
import Modal from './components/modal';
import Body from './components/body';


const firebaseConfig = {
    apiKey: "AIzaSyDzJIt9v_oEv0u4Pv-gCaWU0DO_FGRALRQ",
    authDomain: "photo-tagging-241c5.firebaseapp.com",
    projectId: "photo-tagging-241c5",
    storageBucket: "photo-tagging-241c5.appspot.com",
    messagingSenderId: "887035925496",
    appId: "1:887035925496:web:6a3851ad05abfed53e3c0d"
};

firebase.initializeApp(firebaseConfig);

const db = getFirestore();

const colRef = collection(db, 'characters');

getDocs(colRef).then((snapshot) => {
    let poke = [];
    snapshot.docs.forEach((doc) => {
        poke.push({
            ...doc.data(),
            id: doc.id
        })
    });
    console.log(poke)
})
.catch(err => {
    console.log(err.message)
})

function App() {
  const [start, setStart] = useState(false);
  const [modal, setModal] = useState(true);
  const [menuShown, setMenuShown] = useState(true);

  const startGame = () => {
    setModal(false);
    setStart(true);
  };

  const displayDropMenu = (e) => {
    setMenuShown(prevCheck => !prevCheck);
    const dropDownMenu = document.getElementById('dropDownMenu');

    if (menuShown === true) {
      dropDownMenu.style.display = 'flex';
      dropDownMenu.style.top = `${e.pageY < 2000 ? e.pageY : e.pageY - 200}px`; 
      dropDownMenu.style.left = `${e.pageX < 1099 ? e.pageX : e.pageX - 200}px`;
    } else {
      dropDownMenu.style.display = 'none';
      dropDownMenu.style.top = '0px';
      dropDownMenu.style.left = '0px';
    }
  };

  return (
    <div className='app'>
      {modal && <Modal startGame={startGame} />}
      {start && <Body displayDropMenu={displayDropMenu} />}
    </div>
  )
}

export default App;
