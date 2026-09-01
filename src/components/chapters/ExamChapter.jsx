"use client";

export default function ExamChapter({
    onNext,
    onPrevious,
}) {
    return (
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFFDF8] px-5 py-20">

            <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-[#FFF0C0]/40 blur-3xl" />

            <div className="relative z-10 max-w-4xl text-center">

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E0A800]">
                    Chapter 05
                </p>

                <div className="mt-6 text-6xl">
                    📖😂
                </div>

                <h1 className="mt-5 font-serif text-4xl font-black text-[#263238] sm:text-6xl">
                    The Study Partner
                    <span className="block text-[#E0A800]">
                        Who Betrayed Me
                    </span>
                </h1>

                <div className="mt-10 grid gap-5 sm:grid-cols-2">

                    <div className="rounded-3xl bg-white p-7 shadow-lg">

                        <div className="text-4xl">
                            📚
                        </div>

                        <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#7C83FD]">
                            While Studying
                        </p>

                        <p className="mt-4 font-serif text-2xl font-bold text-[#263238]">
                            Correct Answer
                        </p>

                        <p className="mt-4 leading-7 text-[#6B747A]">
                            Whenever Shrawan asked me something while studying, I would give
                            him the correct answer.
                        </p>

                        <div className="mt-5 text-3xl">
                            ✅
                        </div>

                    </div>

                    <div className="rounded-3xl bg-[#FFE5EA] p-7 shadow-lg">

                        <div className="text-4xl">
                            📝
                        </div>

                        <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#FF6B81]">
                            During The Exam
                        </p>

                        <p className="mt-4 font-serif text-2xl font-bold text-[#263238]">
                            Wrong Answer
                        </p>

                        <p className="mt-4 leading-7 text-[#6B747A]">
                            But when the actual exam started, I would confidently tell him
                            the wrong answer.
                        </p>

                        <div className="mt-5 text-3xl">
                            ❌😂
                        </div>

                    </div>

                </div>

                <div className="mx-auto mt-8 max-w-2xl rounded-full bg-[#FFF3C4] px-6 py-4">

                    <p className="font-semibold text-[#735B00]">
                        Study time: "Bro, this is correct." 📚
                        <br className="sm:hidden" />
                        Exam time: "Bro, write this." 😎
                    </p>

                </div>

            </div>
        </section>
    );
}