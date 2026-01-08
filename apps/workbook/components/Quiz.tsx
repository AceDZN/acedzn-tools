
import React, { useState } from 'react';
import { Question } from '@/lib/types';

interface QuizProps {
  questions: Question[];
  onComplete: (score: number) => void;
}

export const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!questions || questions.length === 0) {
    return (
      <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200 text-center">
        <p className="text-xl text-slate-500 font-medium italic">אין עדיין שאלות זמינות לחלק זה. המשך בשיעור!</p>
      </div>
    );
  }

  if (finished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-200 border-b-[12px] border-b-blue-500 text-center animate-in zoom-in duration-500 max-w-2xl mx-auto">
        <div className="mb-6"><img src="https://api.iconify.design/fluent-emoji/chequered-flag.svg" alt="flag" className="w-16 h-16 mx-auto" /></div>
        <h3 className="text-4xl font-black text-slate-900 mb-2">כל הכבוד!</h3>
        <p className="text-xl text-slate-500 mb-8">סיימת את הבוחן בהצלחה</p>
        
        <div className="bg-slate-50 p-8 rounded-[2rem] mb-8 border-2 border-slate-100 flex flex-col items-center">
          <span className="text-sm text-slate-400 font-black uppercase tracking-widest mb-1">הציון שלך:</span>
          <span className="text-6xl font-black text-blue-600">{percentage}%</span>
          <p className="mt-4 text-slate-600 font-bold">ענית נכון על {score} מתוך {questions.length} שאלות</p>
        </div>

        <button 
          onClick={() => onComplete(score)}
          className="w-full bg-blue-600 text-white font-black py-5 rounded-2xl text-xl hover:bg-blue-700 shadow-lg active:scale-95 transition-all"
        >
          חזרה לשיעור
        </button>
      </div>
    );
  }

  const current = questions[currentIdx];

  const handleAnswer = (idx: number) => {
    if (showFeedback) return;
    setSelected(idx);
    setShowFeedback(true);
    if (idx === current.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const next = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
      setSelected(null);
      setShowFeedback(false);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 max-w-2xl mx-auto text-slate-900">
      <div className="mb-8 flex justify-between items-center">
        <span className="text-blue-700 font-black text-lg">שאלה {currentIdx + 1} מתוך {questions.length}</span>
        <div className="h-3 w-40 bg-slate-100 rounded-full overflow-hidden shadow-inner border border-slate-200">
          <div 
            className="h-full bg-blue-500 transition-all duration-500" 
            style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-8 text-slate-900 leading-tight">{current.question}</h3>

      <div className="space-y-4">
        {current.options.map((opt, i: number) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            disabled={showFeedback}
            className={`w-full text-right p-5 rounded-2xl border-2 transition-all text-lg font-medium ${
              selected === i 
                ? (i === current.correctAnswer ? 'bg-emerald-50 border-emerald-500 text-emerald-900' : 'bg-red-50 border-red-500 text-red-900')
                : (showFeedback && i === current.correctAnswer ? 'bg-emerald-50 border-emerald-500 text-emerald-900' : 'bg-white border-slate-100 hover:border-blue-400 text-slate-800')
            } ${showFeedback && i !== current.correctAnswer && selected !== i ? 'opacity-40' : ''}`}
          >
            <div className="flex items-center gap-3">
              <span className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${selected === i ? 'border-current' : 'border-slate-200'}`}>
                {String.fromCharCode(1488 + i)}
              </span>
              {opt}
            </div>
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className="mt-8 animate-fade-in">
          <div className={`p-6 rounded-2xl mb-8 border-2 ${selected === current.correctAnswer ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-red-50 border-red-200 text-red-900'}`}>
            <p className="font-black text-xl mb-3 flex items-center gap-2">
              {selected === current.correctAnswer ? <><img src="https://api.iconify.design/fluent-emoji/sparkles.svg" alt="sparkles" className="w-6 h-6" /> נכון מאוד!</> : <><img src="https://api.iconify.design/fluent-emoji/cross-mark.svg" alt="cross" className="w-6 h-6" /> לא בדיוק...</>}
            </p>
            <p className="text-lg leading-relaxed opacity-90 font-medium">{current.explanation}</p>
          </div>
          <button 
            onClick={next}
            className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl text-xl hover:bg-slate-800 shadow-lg active:scale-95 transition-all"
          >
            {currentIdx + 1 === questions.length ? 'סיים וראה תוצאות' : 'המשך לשאלה הבאה ←'}
          </button>
        </div>
      )}
    </div>
  );
};
