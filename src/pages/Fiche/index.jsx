import { useParams} from 'react-router-dom'
import './Fiche.css'
import logements from "../../datas/logements.json"



const Fiche = () => {
  const { id } = useParams(); 
  return (
    <div>
      <h1>Fiche du logement {id}</h1>
    </div>
  );
};
export default Fiche