import { useState } from "react";
import flowerShow from "../../assets/philadelphiaflowershow.png";

import "./Browse.css";
import SearchBar from "../Search/Search";

// to create the card & add routing
//browsecard is the child component

const BrowseCard = ({title, image, date, location}) => {
    return (
        <div className="browse-card">
        <img src={image} alt={title} className="card-image" />
        <div className="card-content">
          <p><strong>{date}</strong></p>
          <p>{location}</p>
        </div>
        <div className="card-label">{title}</div>
      </div>
    );
};

//the browse is the parent component
const Browse = () => {
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [appliedCity, setAppliedCity] = useState("All Cities");
  const categories = [
    { title: "Philadelphia Flower Show",
      path: "/events/philadelphia-flower-show",
      city: "Philadelphia",
      image: flowerShow,
      date: "March 1-8, 2026",
      location: "Pennsylavania Convention Center"
    
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

    const handleSearch = (city) => {
      setAppliedCity(city);
    };

  const filteredCategories =
  appliedCity === "All Cities"
    ? categories
    : categories.filter((category) => category.city === appliedCity);

 // search bar is passing props from browse

return (
    <section className="browse-section">
      <div className="browse-header">
      <h2 className="browse-title">Featured Events</h2>

     <SearchBar
      selectedCity={selectedCity}
      setSelectedCity={setSelectedCity}
      onSearch={handleSearch}
    />
      </div>

      <div className="browse-row">
        {filteredCategories.map((category, index) => (
          <BrowseCard 
          key={index} 
          title={category.title}
          path={category.path}
          image={category.image}
          date={category.date}
          location={category.location}/>
        ))}
      </div>
    </section>
  );

};

export default Browse;