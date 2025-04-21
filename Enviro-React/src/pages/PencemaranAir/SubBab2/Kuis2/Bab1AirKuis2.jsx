import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranAir";
import "./Bab1AirKuis2.css";

export default function Bab1AirKuis2() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 1,
            question: "Apa penyakit yang paling sering muncul akibat pencemaran air?",
            options: [
                "Kanker kulit",
                "Diare",
                "Penyakit jantung",
                "Hepatitis B"
            ],
            correct: 1
        },
        {
            id: 2,
            question: "Benar atau Salah: Kolera disebabkan oleh bakteri Vibrio cholerae yang menyebar melalui air yang terkontaminasi.",
            options: ["Benar", "Salah"],
            correct: 0
        },
        {
            id: 3,
            question: "Siapa yang paling rentan terkena dampak pencemaran air?",
            options: [
                "Anak-anak saja",
                "Orang dewasa saja",
                "Lansia saja",
                "Anak-anak dan lansia"
            ],
            correct: 3
        },
        {
            id: 4,
            question: "Apa dampak kesehatan jangka panjang dari mengonsumsi air yang terkontaminasi logam berat seperti arsenik?",
            options: [
                "Meningkatkan risiko penyakit jantung",
                "Meningkatkan risiko kanker",
                "Menurunkan daya tahan tubuh",
                "Mengurangi kadar oksigen dalam darah"
            ],
            correct: 1
        },
        {
            id: 5,
            question: "Benar atau Salah: Air yang tampak jernih selalu aman untuk dikonsumsi.",
            options: ["Benar", "Salah"],
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
                        <h2>Quiz: Penyebab Polusi Air & Dampaknya terhadap Kesehatan</h2>
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
