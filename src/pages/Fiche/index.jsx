import { Navigate, useParams } from 'react-router-dom';
import './Fiche.css';
import logements from "../../datas/logements.json";
import Collapse from '../../components/Collapse';
import redStar from '../../assets/redstar.png';
import greyStar from '../../assets/greystar.png';

const Fiche = () => {
  const { id } = useParams(); 
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <Navigate to="/Error" />;
  }

  const rating = Number(logement.rating);

  return (
    <div className="fiche-container">
      <img className='img-logements' src={logement.cover} alt={logement.title} />

      <div className='logements-info-container'>
        
        <div className='left-info'>
          <h3 className='titre-logements'>{logement.title}</h3>
          <p className='localisation'>{logement.location}</p>

          <div className='btn-container'>
            {logement.tags.map((tag) => (
              <button className="btn-logements" key={tag}>{tag}</button>
            ))}
          </div>

          <Collapse 
            className="description"
            title="Description"
            content={logement.description}
            width="30vw"
          />
        </div>

        <div className='right-info'>
          <div className='host-container'>
            <p className='host-name'>{logement.host.name}</p>
            <img className='host-picture' src={logement.host.picture} alt={`Photo de ${logement.host.name}`} />
          </div>

          <div className='rating'>
            {[1, 2, 3, 4, 5].map((star) => (
              <img
                key={star}
                src={star <= rating ? redStar : greyStar}
                alt="star"
                className="star"
              />
            ))}
          </div>

          <Collapse 
            className="description"
            title="Équipements"
            content={logement.equipments.map((eq, index) => <p key={index}>{eq}</p>)}
            width="30vw"
          />
        </div>

      </div>
    </div>
  );
};

export default Fiche;