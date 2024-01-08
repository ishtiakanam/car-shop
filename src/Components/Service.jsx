/* eslint-disable react/prop-types */
import { FaArrowRightLong } from "react-icons/fa6";

const Service = ({ service }) => {
    const { title, img, price } = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className="h-[315px]" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-[#FF3811] font-bold">Price:${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn text-[#FF3811] btn-outline"><FaArrowRightLong /></button>
                </div>
            </div>
        </div>
    );
};

export default Service;