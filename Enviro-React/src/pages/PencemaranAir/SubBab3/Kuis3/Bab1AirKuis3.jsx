import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranAir";
import "./Bab1AirKuis3.css";

export default function Bab1AirKuis3() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 1,
            question: "Apa yang harus dilakukan pertama kali dalam pengolahan air limbah?",
            options: [
                "Penyaringan kasar untuk memisahkan sampah besar",
                "Disinfeksi dengan klorin",
                "Pengolahan biologis dengan lumpur aktif",
                "Pengendapan sekunder"
            ],
            correct: 0
        },
        {
            id: 2,
            question: "Apa yang dapat dilakukan untuk mengurangi polusi air dari rumah tangga?",
            options: [
                "Membuang minyak bekas ke saluran air",
                "Menggunakan deterjen ramah lingkungan",
                "Meningkatkan penggunaan plastik sekali pakai",
                "Semua jawaban benar"
            ],
            correct: 1
        },
        {
            id: 3,
            question: "Benar atau Salah: Salah satu cara menjaga kualitas air adalah dengan tidak membuang sampah ke sungai atau saluran air.",
            options: ["Benar", "Salah"],
            correct: 0
        },
        {
            id: 4,
            question: "Apa solusi untuk menghemat penggunaan air secara bijak di rumah?",
            options: [
                "Mandi menggunakan shower biasa",
                "Memperbaiki kebocoran pipa",
                "Membiarkan keran menyala saat tidak digunakan",
                "Semua jawaban benar"
            ],
            correct: 1
        },
        {
            id: 5,
            question: "Apa yang dapat dilakukan untuk menjaga sumber air alami tetap bersih dan aman?",
            options: [
                "Tanam pohon di sekitar sumber air",
                "Buang sampah ke sungai untuk mengurangi polusi",
                "Tidak perlu memantau kualitas air secara berkala",
                "Meningkatkan penggunaan bahan kimia di sekitar sumber air"
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
                        <h2>Quiz: Solusi Menjaga Kualitas Air</h2>
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
