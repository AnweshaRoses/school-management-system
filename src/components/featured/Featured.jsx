import "./featured.css"

export default function Featured() {
    return (
        <div className='featured'>
            <div className="featureditem">
                <span className="featuredtitle">English</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">91/100</span>
                </div>
                <span className="featuredsub">Formative assessment 3</span>
            </div>
            <div className="featureditem">
                <span className="featuredtitle">Maths</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">77/100</span>
                </div>
                <span className="featuredsub">Formative assessment 3</span>
            </div>
            <div className="featureditem">
                <span className="featuredtitle">Physics</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">85/100</span>
               </div>
                <span className="featuredsub">Formative assessment 3</span>
            </div>
            <div className="featureditem">
                <span className="featuredtitle">Chemistry</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">99/100</span>
                </div>
                <span className="featuredsub">Formative assessment 3</span>
            </div>
            <div className="featureditem">
                <span className="featuredtitle">Computers</span>
                <div className="featuredmoneycontainer">
                    <span className="featuredmoney">65/100</span>
                </div>
                <span className="featuredsub">Formative assessment 3</span>
            </div>
        </div>
    )
}
