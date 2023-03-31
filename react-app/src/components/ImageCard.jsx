import PropTypes from "prop-types";

function ImageCard({diapo}) {


    return <figure>
  
    <img src={diapo.imgSrc} alt={diapo.titre}/>
    <figcaption> {diapo.titre} </figcaption>
   </figure>;
   
}

ImageCard.propTypes={
  diapo: PropTypes.shape({
    titre : PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
}).isRequired,
};
  

  export default ImageCard;