import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'
// import banner5 from '../../assets/images/banner/5.jpg'
// import banner6 from '../../assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                {/* banner-1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full rounded-xl" />
                    <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ]">
                        <div className='text-white space-y-7 w-1/2 pl-12'>
                            <h2 className='text-6xl font-bold '>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn btn-outline btn-primary mr-5'>Discover More</button>
                                <button className='btn btn-outline btn-secondary'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* banner-2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full rounded-xl" />
                    <div className="absolute h-full rounded-xl flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ]">
                        <div className='text-white space-y-7 w-1/2 pl-12'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn btn-outline btn-primary mr-5'>Discover More</button>
                                <button className='btn btn-outline btn-secondary'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* banner-3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full rounded-xl" />
                    <div className="absolute flex rounded-xl h-full items-center gap-5 left-0 top-o bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ]">
                        <div className='text-white space-y-7 w-1/2 pl-12'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn btn-outline btn-primary mr-5'>Discover More</button>
                                <button className='btn btn-outline btn-secondary'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* banner-4 */}
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full rounded-xl" />
                    <div className="absolute flex h-full rounded-xl items-center gap-5 left-0 top-o bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) ]">
                        <div className='text-white space-y-7 w-1/2 pl-12'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className='btn btn-outline btn-primary mr-5'>Discover More</button>
                                <button className='btn btn-outline btn-secondary'>Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;