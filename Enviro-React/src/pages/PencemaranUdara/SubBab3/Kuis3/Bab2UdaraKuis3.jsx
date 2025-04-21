import { useState } from "react";
import SidebarCourse from "../../../../components/SidebarCourse/SidebarPencemaranUdara";
import "./Bab2UdaraKuis3.css";

export default function Bab2UdaraKuis3() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const questions = [
        {
            id: 1,
            question: "Apa yang dapat dilakukan oleh individu untuk mengurangi polusi udara di lingkungan sekitar?",
            options: [
                "Menanam pohon",
                "Menggunakan kendaraan pribadi lebih sering",
                "Membuang sampah sembarangan",
                "Membakar sampah di halaman rumah"
            ],
            correct: 0
        },
        {
            id: 2,
            question: "Benar atau Salah: Menurunkan penggunaan kendaraan pribadi dan lebih memilih transportasi umum adalah salah satu cara mengurangi polusi udara.",
            options: ["Benar", "Salah"],
            correct: 0
        },
        {
            id: 3,
            question: "Apa yang dilakukan pemerintah di kota-kota besar untuk mengurangi polusi udara?",
            options: [
                "Meningkatkan penggunaan kendaraan pribadi",
                "Menerapkan zona emisi rendah (ULEZ)",
                "Mengurangi ruang terbuka hijau",
                "Mengurangi regulasi emisi kendaraan"
            ],
            correct: 1
        },
        {
            id: 4,
            question: "Bagaimana tanaman dapat membantu mengatasi polusi udara?",
            options: [
                "Menyaring polutan udara dan menghasilkan oksigen",
                "Menghasilkan bahan kimia berbahaya",
                "Menyerap gas berbahaya dalam jumlah besar",
                "Semua jawaban benar"
            ],
            correct: 0
        },
        {
            id: 5,
            question: "Benar atau Salah: Penggunaan air purifier di dalam rumah dapat membantu meningkatkan kualitas udara dan mengurangi polusi yang kita hirup.",
            options: ["Benar", "Salah"],
            correct: 0
        }
    ];

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
                        <h2>Quiz: Solusi dan Upaya Penanggulangan</h2>
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
