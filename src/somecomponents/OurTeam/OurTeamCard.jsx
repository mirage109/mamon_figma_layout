import style from "./style.module.css";

export const OurTeamCard = ({ imagePath, name, position }) => {
  return (
    <div className={style.container}>
      <img className={style.image} src={imagePath} alt={name} />
      <div className={style.positionConainer}>
        <h3 className={style.name}>{name}</h3>
        <p className={style.position}>{position}</p>
      </div>
    </div>
  );
};
