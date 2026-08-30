"use client";

export default function ForgottenBirthdayChapter({
    onNext,
    onPrevious,
}) {
    return (
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#FFF9FC] px-5 py-20">

            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#FFE0E8] blur-3xl" />

            <div className="relative z-10 max-w-4xl text-center">

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF6B81]">
                    Chapter 07
                </p>

                <div className="mt-6 text-6xl">
                    🎂
                </div>

                <h1 className="mt-5 font-serif text-4xl font-black text-[#263238] sm:text-6xl">
                    The Forgotten
                    <span className="block text-[#FF6B81]">
                        Birthday
                    </span>
                </h1>

                <p className="mt-5 text-lg text-[#747C82]">
                    Shrawan has one very special talent...
                </p>

                <div className="mx-auto mt-10 max-w-2xl rounded-[2rem] bg-white p-8 shadow-xl sm:p-12">

                    <div className="text-7xl">
                        🤔
                    </div>

                    <p className="mt-7 font-serif text-3xl font-black text-[#263238]">
                        Forgetting things.
                    </p>

                    <p className="mt-6 leading-8 text-[#687278]">
                        And somehow, my birthday has become one of those things.
                    </p>

                    <div className="my-8 flex items-center justify-center gap-4 text-3xl">
                        🎂 → 🤔 → 😅
                    </div>

                    <p className="leading-8 text-[#687278]">
                        It has happened more than once.
                        <br />
                        Meanwhile...
                    </p>

                    <p className="mt-5 font-serif text-2xl font-bold text-[#FF6B81]">
                        I never forget his birthday.
                    </p>

                    <div className="mt-8 rounded-2xl bg-[#FFE5EA] p-5">
                        <p className="font-semibold text-[#C63D60]">
                            But that's okay. 😂
                        </p>

                        <p className="mt-2 text-sm text-[#9B566B]">
                            Because birthdays aren't what define a friendship.
                        </p>
                    </div>

                </div>

                <div className="mt-10 flex justify-center gap-4">

                    <button
                        onClick={onPrevious}
                        className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold"
                    >
                        ← Back
                    </button>

                    <button
                        onClick={onNext}
                        className="rounded-full bg-[#FF6B81] px-7 py-3 text-sm font-bold text-white shadow-lg"
                    >
                        The Important Chapter →
                    </button>

                </div>

            </div>
        </section>
    );
}