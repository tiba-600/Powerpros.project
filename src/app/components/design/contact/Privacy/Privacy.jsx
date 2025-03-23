import "./Privacy.css"

const Privacy = () => {
    const currentYear = new Date().getFullYear(); // Haalt het huidige jaar op
    return (
        <>
        <div className="privacy">
            <div className="privacy__jaar">
            <p>@ {currentYear}</p>
            </div>
            <div className="privacy__title">
                <p>Privacy policy</p>
            </div>
        </div>
       
        </>
    )
}

export default Privacy; 