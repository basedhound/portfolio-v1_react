import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          // eslint-disable-next-line
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={
              active === item
                ? { backgroundColor: "var(--secondary-color)" }
                : {}
            }
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
