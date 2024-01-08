import img from '../../assets/images/about_us/parts.jpg'
import img2 from '../../assets/images/about_us/person.jpg'
const AboutUs = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className='relative lg:w-1/2'>
                        <img src={img2} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={img} className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 right-5 border-8 border-white" />
                    </div>
                    <div className='space-y-5 lg:w-1/2'>
                        <h2 className='text-3xl font-bold text-[#FF3811]'>About Us</h2>
                        <h1 className="text-4xl font-bold text-black">We are qualified & of experience in this field</h1>
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. <br /> <br />
                            The majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <button className="btn btn-outline bg-[#FF3811] text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;