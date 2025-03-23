import "./Home_Title.css"

const HomeTitle = () => {
    return (
        <div className="home">

            <img src="/public/foto's/home.jpg" alt="Electrical Work" className="home__img" />

            <div className="home__overlay">
                <p className="home__title">
                    Professional Electrical & Network Solutions <br />
                    <span className="home__subtitle">
                        Expert electrical and networking services for your home and business.
                    </span>
                </p>
            </div>
        </div>
    );
};

export default HomeTitle;
