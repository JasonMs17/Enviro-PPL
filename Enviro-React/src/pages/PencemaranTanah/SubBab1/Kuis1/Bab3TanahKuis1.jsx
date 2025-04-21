import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranTanah";
import "./Bab3TanahKuis1.css";

export default function Bab3TanahKuis1() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 1,
            question: "Apa yang dimaksud dengan polusi tanah?",
            options: [
                "Proses alami yang menyebabkan perubahan tanah",
                "Keadaan tanah yang tercemar oleh zat berbahaya, terutama bahan kimia buatan manusia",
                "Proses pengolahan tanah untuk pertanian",
                "Semua jawaban benar"
            ],
            correct: 1
        },
        {
            id: 2,
            question: "Polusi tanah bisa terjadi pada dua lapisan utama tanah. Lapisan manakah yang biasanya tercemar karena pembuangan sampah dan limbah padat?",
            options: [
                "Lapisan permukaan tanah",
                "Lapisan bawah tanah",
                "Lapisan subsoil",
                "Lapisan udara"
            ],
            correct: 0
        },
        {
            id: 3,
            question: "Benar atau Salah: Polusi tanah hanya terjadi di area perkotaan yang padat penduduk.",
            options: ["Benar", "Salah"],
            correct: 1
        },
        {
            id: 4,
            question: "Apa yang menjadi penyebab utama polusi tanah di daerah perkotaan?",
            options: [
                "Kebocoran limbah cair dari pabrik",
                "Tumpahan bahan kimia dari kendaraan",
                "Pembuangan sampah sembarangan dan limbah rumah tangga",
                "Penggunaan pupuk organik"
            ],
            correct: 2
        },
        {
            id: 5,
            question: "Apa salah satu contoh polutan yang sering ditemukan di tanah akibat aktivitas industri?",
            options: [
                "Oksigen",
                "Karbon dioksida",
                "Timbal dan merkuri",
                "Nitrogen oksida"
            ],
            correct: 2
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
                        <h2>Quiz: Polusi Tanah & Penyebabnya</h2>
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
