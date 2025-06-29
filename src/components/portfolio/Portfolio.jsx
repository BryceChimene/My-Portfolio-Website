import './Portfolio.css'

export default function Portfolio() {
    return <div id="portfolio-section" className="section">
        <div className="portfolio-container">
            <h2>Portfolio</h2>
            <div className='highlight-container'>
                <div>
                    <div>
                        <p><span>Full-Stack Software Developer Intern</span></p>
                        <h2>Tern</h2>
                    </div>
                    <img src='src/assets/portfolio/tern_image.png' alt='tern intern'/>
                </div>
            </div>
        </div>
    </div>
}