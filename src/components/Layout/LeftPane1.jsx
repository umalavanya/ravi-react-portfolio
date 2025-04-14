import profile from '../../assets/profile.jpg';

const LeftPane = ({ activeSection, setActiveSection }) => {
  return (
    <div className="left-pane">
      <img src={profile} alt="Ravi Kumar Bandapelli" className="profile-pic" />
      <h2>Ravi Kumar Bandapelli</h2>
      
      <div className="nav-links">
        {['about', 'education', 'experience', 'awards', 'publications'].map((section) => (
          <button
            key={section}
            className={`nav-link ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftPane;