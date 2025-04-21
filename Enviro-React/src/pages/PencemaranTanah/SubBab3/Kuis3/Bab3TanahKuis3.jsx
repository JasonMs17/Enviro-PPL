import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranTanah";
import "./Bab3TanahKuis3.css";

export default function Bab3TanahKuis3() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 1,
            question: "Apa langkah pertama yang dapat dilakukan oleh rumah tangga untuk mengurangi polusi tanah?",
            options: [
                "Membuang sampah sembarangan",
                "Memilah sampah menjadi organik dan anorganik",
                "Membakar sampah plastik",
                "Menyimpan sampah di rumah tanpa dikelola"
            ],
            correct: 1
        },
        {
            id: 2,
            question: "Benar atau Salah: Daur ulang sampah plastik di rumah dapat mengurangi jumlah sampah yang mencemari tanah.",
            options: ["Benar", "Salah"],
            correct: 0
        },
        {
            id: 3,
            question: "Apa dampak penggunaan pupuk kimia yang berlebihan pada tanah?",
            options: [
                "Menyuburkan tanah dan meningkatkan hasil pertanian",
                "Merusak struktur tanah dan mengurangi kesuburannya",
                "Membuat tanah menjadi lebih kaya akan mikroorganisme",
                "Tidak mempengaruhi kesuburan tanah"
            ],
            correct: 1
        },
        {
            id: 4,
            question: "Benar atau Salah: Penggunaan pupuk organik lebih baik untuk tanah dibandingkan pupuk kimia, karena pupuk organik membantu menjaga keseimbangan tanah.",
            options: ["Benar", "Salah"],
            correct: 0
        },
        {
            id: 5,
            question: "Apa yang dimaksud dengan 'urban farming' dan bagaimana hal ini dapat membantu mengurangi polusi tanah?",
            options: [
                "Pertanian yang menggunakan pestisida kimia di daerah perkotaan",
                "Bertani di area perkotaan menggunakan metode ramah lingkungan yang meningkatkan kualitas tanah",
                "Memperkenalkan teknik pertanian tradisional yang tidak ramah lingkungan",
                "Tidak berhubungan dengan pengelolaan tanah"
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
                        <h2>Quiz: Solusi Mengatasi Polusi Tanah</h2>
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
