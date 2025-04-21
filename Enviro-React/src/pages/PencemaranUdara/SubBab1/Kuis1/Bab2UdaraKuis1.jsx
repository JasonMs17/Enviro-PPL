import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranUdara";
import "./Bab2UdaraKuis1.css";

export default function Bab2UdaraKuis1() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 1,
            question: "Apa yang dimaksud dengan polusi udara?",
            options: [
                "Udara yang bebas dari gas dan partikel",
                "Udara yang tercampur dengan zat berbahaya yang membahayakan kesehatan",
                "Udara yang mengandung oksigen murni",
                "Udara yang dihasilkan oleh tanaman"
            ],
            correct: 1
        },
        {
            id: 2,
            question: "Polutan mana yang terbentuk dari reaksi antara asap kendaraan dan sinar matahari?",
            options: [
                "Karbon monoksida (CO)",
                "Smog fotokimia",
                "Nitrogen oksida (NOx)",
                "Ozon troposferik"
            ],
            correct: 1
        },
        {
            id: 3,
            question: "Benar atau Salah: Polusi udara hanya berasal dari aktivitas manusia dan tidak dapat terbentuk dari sumber alami.",
            options: ["Benar", "Salah"],
            correct: 1
        },
        {
            id: 4,
            question: "Mana yang merupakan contoh sumber polusi udara alami?",
            options: [
                "Asap kendaraan bermotor",
                "Letusan gunung berapi",
                "Pembakaran sampah",
                "Pembangkit listrik"
            ],
            correct: 1
        },
        {
            id: 5,
            question: "Polutan apa yang berkontribusi besar terhadap pemanasan global?",
            options: [
                "Karbon monoksida (CO)",
                "Metana (CH₄)",
                "Ozon (O₃)",
                "Partikulat (PM2.5)"
            ],
            correct: 1
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
                        <h2>Quiz: Pengenalan dan Dampak Polusi Udara</h2>
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
