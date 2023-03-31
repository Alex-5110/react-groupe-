import { useState } from "react";
import './App.css'
import ImageCard from "./components/ImageCard";


const image = [
  {Titre: "Diapo 1",
  imgSrc:"./src/img/1.jpg", 
},

  {Titre: "Diapo 2",
  imgSrc:"./src/img/2.jpg", 
},

  {Titre: "Diapo 3",
  imgSrc:"./src/img/3.jpg", 
},

  {Titre: "Diapo 4",
  imgSrc:"./src/img/4.jpg", 
},

  {Titre: "Diapo 5",
  imgSrc:"./src/img/5.jpg", 
},

];


function App() {
  
    const [count, setCount] = useState(0);

let diapo=image[count];

    const next = () => {
      if (count < image.length-1) { setCount(count + 1) }
    }
    const previous = () => {
      if (count > 0) { setCount(count - 1) }
    
    }
    
    return (
      <div>
        <ImageCard diapo={image[count]} />
        <button onClick={previous}>previous image</button>
        <button onClick={next}>Next image</button>
        <br/><p>Diapo number {count+1} Of {image.length}</p>
      </div>
    );
    }
    
  
export default App;
