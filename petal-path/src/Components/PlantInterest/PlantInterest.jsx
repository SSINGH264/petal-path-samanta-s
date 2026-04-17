import { useState } from "react";
import "./PlantInterest.css";

const interests = [
  "Bird of Paradise",
  "Camellia",
  "Corpse Flower",
  "Cosmo",
  "Dahlia",
  "Hibiscus",
  "Iris",
  "Lavender",
  "Lily",
  "Orchid",
  "Peony",
  "Rose",
  "Sunflower"
];

const PlantInterest = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  return (
    <section className="plant-interest-section">
      <h2 className="plant-interest-title">Grow Your Interests</h2>
      <p className="plant-interest-subtitle">
        Choose the blooms that interest you most.
      </p>

      <div className="interest-button-group">
        {interests.map((interest) => (
          <button
            key={interest}
            type="button"
            className={`interest-button ${
              selectedInterests.includes(interest) ? "active" : ""
            }`}
            onClick={() => toggleInterest(interest)}
          >
            {interest}
          </button>
        ))}
      </div>

      <div className="selected-display">
        <h3>Selected Interests</h3>
        <p>
          {selectedInterests.length > 0
            ? selectedInterests.join(", ")
            : "No interests selected yet."}
        </p>
      </div>
    </section>
  );
};

export default PlantInterest;