const Experience = () => {
    return (
        <div className="content-section active">
            <h1>Professional Experience</h1>
            <div className="experience-item">
                <div className="item-title">Post Doctoral Fellow</div>
                <div className="item-date">Carnegie Mellon University, [Year] - Present</div>
                <div className="item-description">
                    <p>Research focus on [specific research topics]. Collaborating with [professors/research groups].</p>
                </div>
            </div>
            <div className="experience-item">
                <div className="item-title">Research Assistant</div>
                <div className="item-date">[Previous University], [Year] - [Year]</div>
                <div className="item-description">
                    <p>Worked on [specific projects]. Published [number] papers in [journals/conferences].</p>
                </div>
            </div>

            <div style={{ marginBottom: '20rem' }}></div>
        </div>
    );
};

export default Experience;