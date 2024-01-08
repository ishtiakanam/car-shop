import { useEffect } from "react";
import { useState } from "react";
import Service from "../../Components/Service";

const Services = () => {
    const [services, setServices] = useState()

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="text-center justify-center space-y-3">
                <h3 className="text-2xl font-bold text-[#FF3811]">Service</h3>
                <h1 className="text-4xl font-bold ">Our Service Area</h1>
                <p className="">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 mb-5">
                {services?.map(service => <Service key={service._id} service={service}></Service>
                    // <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    //     <figure><img src={service.img} alt="Shoes" /></figure>
                    //     <div className="card-body">
                    //         <h2 className="card-title">Shoes!</h2>
                    //         <p>If a dog chews shoes whose shoes does he choose?</p>
                    //         <div className="card-actions justify-end">
                    //             <button className="btn btn-primary">Buy Now</button>
                    //         </div>
                    //     </div>
                    // </div>
                )}
            </div>
        </div>
    );
};

export default Services;