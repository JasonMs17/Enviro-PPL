import React, { useState, useEffect } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import "./kuishubung.css";

const initialPairs = [ // ini buat nambahin category sama optionnya
  { category: "mikrobiologis", answer: "limbah manusia/hewan" },
  { category: "termal", answer: "industri/pembangkit listrik" },
  { category: "kimia organik", answer: "rumah tangga & pertanian" },
];

const checklistData = [ // ini buat nambahin soal sama pilihan
  {
    question: "Aktivitas manusia yang dapat menyebabkan polusi tanah:",
    options: [
      { text: "Pembuangan sampah langsung ke tanah", correct: true },
      { text: "Penggunaan pestisida berlebihan", correct: true },
      { text: "Menanam pohon di lahan kosong", correct: false },
      { text: "Limbah cair industri bocor ke tanah", correct: true },
    ],
  },
  {
    question: "Ciri-ciri tanah yang mungkin sudah tercemar:",
    options: [
      { text: "Tanaman sulit tumbuh", correct: true },
      { text: "Bau menyengat dari permukaan tanah", correct: true },
      { text: "Warna tanah berubah", correct: true },
      { text: "Banyak cacing di dalam tanah", correct: false },
    ],
  },
];

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

const ChecklistQuiz = ({ submitted }) => {
  const [answers, setAnswers] = useState({});

  const toggleOption = (qIndex, oIndex) => {
    setAnswers((prev) => {
      const prevSet = new Set(prev[qIndex] || []);
      if (prevSet.has(oIndex)) {
        prevSet.delete(oIndex);
      } else {
        prevSet.add(oIndex);
      }
      return { ...prev, [qIndex]: prevSet };
    });
  };

  const isChecked = (qIndex, oIndex) =>
    answers[qIndex] && answers[qIndex].has(oIndex);

  return (
    <div className="checklist-quiz">
      <h2>Checklist Quiz</h2>
      {checklistData.map((item, qIndex) => (
        <div key={qIndex} className="checklist-question">
          <h4>{item.question}</h4>
          <ul>
            {item.options.map((opt, oIndex) => {
              const isSelected = isChecked(qIndex, oIndex);
              const isRight = opt.correct;
              const showFeedback = submitted;
              let className = "";
              if (showFeedback) {
                if (isSelected && isRight) className = "correct";
                else if (isSelected && !isRight) className = "incorrect";
              }
              return (
                <li key={oIndex} className={className}>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleOption(qIndex, oIndex)}
                      disabled={submitted}
                    />
                    <span>{opt.text}</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

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
    initialPairs.some((pair) => pair.category === cat && pair.answer === opt);

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

      <ChecklistQuiz submitted={submitted} />

      <button className="submit-btn" onClick={() => setSubmitted(true)}>
        Submit
      </button>
    </div>
  );
};

export default Quiz;
