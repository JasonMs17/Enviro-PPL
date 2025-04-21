import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranAir";
import "./Bab1AirKuis1.css";

export default function Bab1AirKuis1() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 1,
            question: "Apa yang dimaksud dengan polusi air?",
            options: [
                "Ketika air tercemar oleh zat-zat berbahaya akibat aktivitas manusia",
                "Air yang digunakan untuk kebutuhan industri",
                "Proses pemurnian air",
                "Air yang digunakan untuk keperluan pertanian"
            ],
            correct: 0
        },
        {
            id: 2,
            question: "Mana dari ciri-ciri berikut yang menunjukkan bahwa air tercemar?",
            options: [
                "Tidak ada rasa atau bau",
                "Munculnya endapan atau zat terlarut",
                "Air yang bening",
                "Semua jawaban benar"
            ],
            correct: 1
        },
        {
            id: 3,
            question: "Benar atau Salah: Polusi air terjadi ketika kualitas air menurun hingga tidak lagi layak untuk digunakan dalam kehidupan manusia, pertanian, atau menjaga ekosistem air tetap seimbang.",
            options: ["Benar", "Salah"],
            correct: 0
        },
        {
            id: 4,
            question: "Apa yang dimaksud dengan pencemaran mikrobiologis?",
            options: [
                "Pencemaran akibat bakteri, virus, atau parasit berbahaya",
                "Pencemaran akibat limbah industri",
                "Pencemaran akibat suhu air yang tinggi",
                "Pencemaran akibat pupuk berlebihan"
            ],
            correct: 0
        },
        {
            id: 5,
            question: "Apa dampak utama dari pencemaran air terhadap ekosistem air?",
            options: [
                "Keanekaragaman hayati menurun",
                "Terjadinya ledakan alga yang tidak terkendali",
                "Rantai makanan terganggu",
                "Semua jawaban benar"
            ],
            correct: 3
        }
    ];

    const handleChange = (qid, index) => {
        setAnswers({
            ...answers,
            [qid]: index
        });
    };

    const handleSubmit = () => {
        setShowResults(true);
    };

    const handleClearAnswer = (qid) => {
        setAnswers({
            ...answers,
            [qid]: undefined
        });
    };

    return (
        <div className={`bab-1-air-materi-1 ${isSidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
            <SidebarCourse isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="course-container">
                <div className="course-article">
                    <div className="course-content">
                        <h2>Quiz: Apa Itu Polusi Air?</h2>
                        {questions.map((q, idx) => (
                            <div key={q.id} className="kuis-question">
                                <p><strong>{idx + 1}. {q.question}</strong></p>
                                {q.options.map((opt, i) => (
                                    <label key={i} className="kuis-option">
                                        <input
                                            type="radio"
                                            name={`question-${q.id}`}
                                            value={i}
                                            onChange={() => handleChange(q.id, i)}
                                            disabled={showResults}
                                            checked={answers[q.id] === i}
                                        />
                                        {opt}
                                    </label>
                                ))}
                                {showResults && (
                                    <p className={`result ${answers[q.id] === q.correct ? "correct" : "incorrect"}`}>
                                        {answers[q.id] === q.correct
                                            ? "✅ Benar"
                                            : `❌ Salah. Jawaban benar: ${q.options[q.correct]}`}
                                    </p>
                                )}
                                {!showResults && (
                                    <button
                                        className="clear-answer-btn"
                                        onClick={() => handleClearAnswer(q.id)}
                                    >
                                        Hapus Pilihan
                                    </button>
                                )}
                            </div>
                        ))}
                        {!showResults && (
                            <button className="kuis-submit" onClick={handleSubmit}>Kumpulkan Jawaban</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
