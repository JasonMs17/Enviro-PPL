import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranTanah";
import "./Bab3TanahKuis2.css";

export default function Bab3TanahKuis2() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 1,
            question: "Timbal adalah logam berat yang sering ditemukan di tanah tercemar. Apa yang bisa terjadi jika tubuh terpapar timbal secara terus-menerus?",
            options: [
                "Meningkatkan daya tahan tubuh",
                "Mengganggu sistem saraf dan ginjal",
                "Meningkatkan kecerdasan",
                "Membantu pertumbuhan rambut"
            ],
            correct: 1
        },
        {
            id: 2,
            question: "Benar atau Salah: Arsenik adalah bahan kimia yang dapat menyebabkan kanker pada manusia jika terpapar dalam jangka panjang melalui tanah yang tercemar.",
            options: ["Benar", "Salah"],
            correct: 0
        },
        {
            id: 3,
            question: "Bagaimana polusi tanah yang mengandung merkuri dapat memengaruhi kesehatan manusia?",
            options: [
                "Meningkatkan kekebalan tubuh",
                "Menyebabkan kerusakan pada sistem saraf dan ginjal",
                "Membantu proses pencernaan",
                "Meningkatkan kesehatan paru-paru"
            ],
            correct: 1
        },
        {
            id: 4,
            question: "Polusi tanah yang mengandung logam berat dapat menyebabkan gangguan sistem saraf. Apa gejala yang dapat timbul akibat paparan jangka panjang?",
            options: [
                "Peningkatan daya ingat",
                "Gangguan koordinasi dan kesulitan belajar pada anak-anak",
                "Meningkatkan kemampuan motorik",
                "Peningkatan penglihatan"
            ],
            correct: 1
        },
        {
            id: 5,
            question: "Sayuran dan buah yang tumbuh di tanah tercemar dapat mengandung zat berbahaya. Apa dampaknya bagi manusia yang mengonsumsinya?",
            options: [
                "Menyebabkan kerusakan pada organ tubuh dan meningkatkan risiko kanker",
                "Tidak ada dampak, karena polutan hanya memengaruhi tanaman",
                "Meningkatkan kekebalan tubuh",
                "Tidak mempengaruhi kesehatan manusia"
            ],
            correct: 0
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
                        <h2>Quiz: Dampak Polusi Tanah terhadap Kesehatan</h2>
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
