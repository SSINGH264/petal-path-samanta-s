import "./Browse.css";

// to create the card & passing pops with title

const BrowseCard = ({title}) => {
    return (
     <div className = "browse-card">
        <div className = "card-content"> </div>
        <div className = "card-label">{title} </div>
     </div>
    );
};

const Browse = () => {
  const categories = [
    "Philadelphia Flower Show",
    "Orchid Show NYBG",
    "America's State Flowers",
    "Patterns in Nature MOBOT",
    "National Cherry Blossom Festival",
    "Rochester Lilac Festival",
    "Gardens of Renewal",
    "Portland Rose Festival",
    "Skagit Valley Tulip Festival",
    "Northwest Flower & Garden Show",

  ];

return (
    <section className="browse-section">
      <h2 className="browse-title">Featured Events</h2>

      <div className="browse-row">
        {categories.map((title, index) => (
          <BrowseCard key={index} title={title} />
        ))}
      </div>
    </section>
  );

};

export default Browse;