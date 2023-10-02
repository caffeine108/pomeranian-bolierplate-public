import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import './styles.css';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-greeting">Hej tu Kamila</h1>
      <p className="dashborad-description">
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności.
      </p>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Moje CV</h3>
          <PersonalCardIcon />
          <p>podgląd cv wraz z doświadczeniem</p>
          <Link to="/cv">zobacz więcej {'>'}</Link>
        </div>
      </div>
      <aside className="dashboard-aside"></aside>
    </div>
  );
};
