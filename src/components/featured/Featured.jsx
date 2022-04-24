import "./featured.css"

export default function Featured(props) {
    return (
        <div className='featured'>
            <div className="featureditem">
                <span className="featuredtitle">Math</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">{props.math}</span>
                </div>
                <span className="featuredsub">Formative assessment 3</span>
            </div>
            <div className="featureditem">
                <span className="featuredtitle">Social Studies</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">{props.socialStudies}</span>
                </div>
                <span className="featuredsub">Formative assessment 3</span>
            </div>
            <div className="featureditem">
                <span className="featuredtitle">Science</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">{props.science}</span>
               </div>
                <span className="featuredsub">Formative assessment 3</span>
            </div>
            <div className="featureditem">
                <span className="featuredtitle">General Knowledge</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">{props.generalKnowledge}</span>
                </div>
                <span className="featuredsub">Formative assessment 3</span>
            </div>
        </div>
    )
}
