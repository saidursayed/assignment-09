import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import "animate.css";

const SkillCard = ({ skill }) => {
  const { skillId, skillName, image, rating, price } = skill;
  const [hovered, setHovered] = useState(false);

  return (
    <div data-aos="zoom-in-up" className="card bg-white shadow-sm">
      <figure>
        <img src={image} alt="" className="w-full" />
      </figure>
      <div>
        <div className="card-body p-3">
          <h2 className="card-title text-xl font-semibold">{skillName}</h2>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-orange-400">
              <span className="text-gray-600 text-base font-medium">
                Rating:{" "}
              </span>
              {Array.from({ length: rating }).map((_, i) => (
                <FaStar key={i} />
              ))}

              <span className="ml-0.5 text-gray-600">{rating}</span>
            </div>
            <div className="ml-auto">
              <p className="font-medium text-base">Price: ${price}</p>
            </div>
          </div>
        </div>

        <div className="card-actions justify-end">
          <Link
            to={`/skill-details/${skillId}`}
            className="btn rounded-none rounded-b-lg w-full text-base bg-[#4a3aff40] text-primary hover:bg-primary hover:text-white overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <span
              className={`inline-block ${
                hovered && "animate__animated animate__fadeInUp animate__faster animate__delay-0.9s"
              }`}
            >
              View Details
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
