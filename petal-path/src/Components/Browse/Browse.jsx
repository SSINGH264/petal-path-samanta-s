import { useState } from "react";
import { Link } from "react-router-dom";

import "./Browse.css";
import SearchBar from "../Search/Search";

// to create the card & add routing

const BrowseCard = ({title, path}) => {
    return (
      <Link to={path} className="browse-link">
      <div className="browse-card">
        <div className="card-content"></div>
        <div className="card-label">{title}</div>
      </div>
    </Link>
    );
};

const Browse = () => {
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const categories = [
    { title: "Philadelphia Flower Show",
      path: "/events/philadelphia-flower-show",
      city: "Philadelphia"
    },

    { title: "Orchid Show NYBG",
      path: "/events/orchid-show-nybg",
      city: "New York City"
    },

    { title: "America's State Flowers",
      path: "/events/americas-state-flowers",
      city: "Washington D.C."
    },

    { title: "Patterns in Nature MOBOT",
      path: "/events/patterns-in-nature-mobot",
      city: "St. Louis"
    },

    { title: "National Cherry Blossom Festival",
      path: "/events/national-cherry-blossom-festival",
      city: "Washington D.C."
    },

    { title: "Rochester Lilac Festival",
      path: "/events/rochester-lilac-festival",
      city: "New York City"
    },

    { title: "Gardens of Renewal",
      path: "/events/gardens-of-renewal",
    },

    { title: "Portland Rose Festival",
      path: "/events/portland-rose-festival",
    },

    { title: "Skagit Valley Tulip Festival",
      path: "/events/skagit-valley-tulip-festival",
    },

    { title: "Northwest Flower & Garden Show",
      path: "/events/northwest-flower-garden-show",
    },
  ];

  const filteredCategories =
    selectedCity === "All Cities"
      ? categories
      : categories.filter((category) => category.city === selectedCity);

return (
    <section className="browse-section">
      <div className="browse-header">
      <h2 className="browse-title">Featured Events</h2>

            <SearchBar
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
        />
      </div>

      <div className="browse-row">
        {filteredCategories.map((catagory, index) => (
          <BrowseCard 
          key={index} 
          title={catagory.title}
          path={catagory.path}/>
        ))}
      </div>
    </section>
  );

};

export default Browse;