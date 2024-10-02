import style from "../carrusel/CarruselStyle.module.css";
const Carrusel = ({ images }) => {
  return (
    <div className={style.carruselContainer}>
      <div className={style.titleContainer}>
        <h2>Continuar viendo</h2>
      </div>
      <div className={style.carrusel}>
        <div className={style.carruselBox}>{<img src={images} alt="" />}</div>
        <a href="" className={style.switchLeft}></a>
        <a href="" className={style.switchRight}></a>
      </div>
    </div>
  );
};

export default Carrusel;
