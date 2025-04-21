import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranUdara";
import "./Bab2UdaraKuis2.css";

export default function Bab2UdaraKuis2() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 1,
            question: "Polusi udara dapat menyebabkan masalah kesehatan. Apa dampak utama bagi sistem pernapasan manusia?",
            options: [
                "Iritasi saluran napas dan asma",
                "Meningkatnya kekuatan paru-paru",
                "Meningkatkan daya tahan tubuh",
                "Tidak ada dampak pada sistem pernapasan"
            ],
            correct: 0
        },
        {
            id: 2,
            question: "Benar atau Salah: Polutan seperti karbon monoksida dan sulfur dioksida dapat menyebabkan gangguan pada sistem kardiovaskular, meningkatkan risiko serangan jantung dan stroke.",
            options: ["Benar", "Salah"],
            correct: 0
        },
        {
            id: 3,
            question: "Mana dari berikut ini yang merupakan efek jangka panjang dari polusi udara terhadap sistem pernapasan?",
            options: [
                "Meningkatkan kualitas tidur",
                "Penurunan fungsi paru-paru dan kanker paru",
                "Meningkatkan daya tahan tubuh",
                "Menurunkan kadar oksigen dalam tubuh"
            ],
            correct: 1
        },
        {
            id: 4,
            question: "Polusi udara dapat memperburuk penyakit kronis. Penyakit apa yang sering diperburuk akibat paparan polusi udara?",
            options: [
                "Penyakit jantung",
                "Diabetes tipe 1",
                "Osteoporosis",
                "Hepatitis"
            ],
            correct: 0
        },
        {
            id: 5,
            question: "Benar atau Salah: Polusi udara hanya berpengaruh pada individu yang memiliki riwayat penyakit pernapasan seperti asma.",
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
                        <h2>Quiz: Dampak Polusi Udara terhadap Kesehatan</h2>
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
