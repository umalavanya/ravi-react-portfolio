const Awards = () => {
    return (
        <div className="content-section active">
            <h1>Awards & Honors</h1>
            <div className="award-item">
                <div className="item-title">[Award Name]</div>
                <div className="item-date">[Year]</div>
                <div className="item-description">[Brief description of the award]</div>
            </div>
            <div className="award-item">
                <div className="item-title">[Fellowship Name]</div>
                <div className="item-date">[Year] - [Year]</div>
                <div className="item-description">[Description of fellowship]</div>
            </div>
            <div style={{ marginBottom: '20rem' }}></div>
        </div>
    );
};

export default Awards;