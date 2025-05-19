import React, { useState, useEffect } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import "./kuishubung.css";

const initialPairs = [ // ini buat nambahin category sama optionnya
  { category: "mikrobiologis", answer: "limbah manusia/hewan" },
  { category: "termal", answer: "industri/pembangkit listrik" },
  { category: "kimia organik", answer: "rumah tangga & pertanian" },
];

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

const Quiz = () => {
  const [categories, setCategories] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [connections, setConnections] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const shuffled = shuffle(initialPairs);
    setCategories(shuffle(shuffled.map((item) => item.category)));
    setOptions(shuffle(shuffled.map((item) => item.answer)));
  }, []);

  const handleCategoryClick = (cat) => setSelectedCategory(cat);

  const handleOptionClick = (opt) => {
    if (selectedCategory) { // ini buat ngapus opsinya biar anuannya ga double
      const updated = Object.fromEntries(
        Object.entries(connections).filter(([_, v]) => v !== opt)
      );
      updated[selectedCategory] = opt;
      setConnections(updated);
      setSelectedCategory(null);
    }
  };

  const isCorrect = (cat, opt) =>
    initialPairs.some(
      (pair) => pair.category === cat && pair.answer === opt
    );

  return (
    <div className="matching-quiz">
      <h2>Cocokkan Jenis Pencemaran dengan Sumbernya</h2>
      <ArcherContainer strokeColor="gray">
        <div className="matching-columns">
          <div className="left-column">
            {categories.map((cat) => (
              <ArcherElement
                key={cat}
                id={cat}
                relations={
                  connections[cat]
                    ? [
                        {
                          targetId: connections[cat],
                          targetAnchor: "left",
                          sourceAnchor: "right",
                          style: {
                            strokeColor: submitted
                              ? isCorrect(cat, connections[cat])
                                ? "green"
                                : "red"
                              : "gray",
                          },
                        },
                      ]
                    : []
                }
              >
                <div
                  className={`box category ${
                    selectedCategory === cat ? "selected" : ""
                  }`}
                  onClick={() => handleCategoryClick(cat)}
                >
                  {cat}
                </div>
              </ArcherElement>
            ))}
          </div>

          <div className="right-column">
            {options.map((opt) => (
              <ArcherElement key={opt} id={opt}>
                <div
                  className={`box option ${
                    Object.values(connections).includes(opt)
                      ? "connected"
                      : ""
                  }`}
                  onClick={() => handleOptionClick(opt)}
                >
                  {opt}
                </div>
              </ArcherElement>
            ))}
          </div>
        </div>
      </ArcherContainer>

      <button className="submit-btn" onClick={() => setSubmitted(true)}>
        Submit
      </button>
    </div>
  );
};

export default Quiz;
