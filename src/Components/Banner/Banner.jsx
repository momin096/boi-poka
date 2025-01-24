import bannerImg from '../../assets/books.jpg';


const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <img
                        src={bannerImg}
                        className="max-w-xl w-full rounded-lg " />
                    <div className='space-y-20'>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;