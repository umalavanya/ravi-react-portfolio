const Education = () => {
    return (
        <div className="content-section active">
            <h1>Education</h1>
            <div className="education-item">
                <div className="item-title">Ph.D. in Experimental Condensed Matter Physics</div>
                <div className="item-date">University of Hyderabad, 2010 - 2018</div>
                <div className="item-description">Thesis: </div>
            </div>
            <div className="education-item">
                <div className="item-title">M.Sc. in Physics</div>
                <div className="item-date">Osmania University, 2007 - 2009</div>
            </div>
            <div className="education-item">
                <div className="item-title">B.Sc. in (Mathematics, Physics, Chemistry)</div>
                <div className="item-date">Kakathiya University, 2006 - 2009</div>
            </div>

            <div style={{ marginBottom: '20rem' }}></div>
        </div>
    );
};

export default Education;