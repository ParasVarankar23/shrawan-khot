"use client";

export default function BirthdayLetter({ open, onClose }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#263238]/40 px-5 py-8 backdrop-blur-sm">

            <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-[#FFF9F2] p-7 shadow-2xl sm:p-12">

                <button
                    onClick={onClose}
                    className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-[#6B7280] shadow-sm transition hover:bg-[#FFE5EA] hover:text-[#FF6B81]"
                >
                    ×
                </button>

                <div className="mb-7 text-5xl">
                    💌
                </div>

                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF6B81]">
                    A Birthday Letter
                </p>

                <h2 className="mt-3 font-serif text-4xl font-black text-[#263238]">
                    Dear Shrawan,
                </h2>

                <div className="mt-8 space-y-6 text-base leading-8 text-[#59636A]">

                    <p>
                        Ten years ago, we were just two students in 6th grade. Neither of
                        us knew how many memories we would create together.
                    </p>

                    <p>
                        From the Social Studies incident to the legendary 7th-grade pant
                        incident, from studying together to giving each other completely
                        wrong answers during exams — our friendship has always had its own
                        kind of madness.
                    </p>

                    <p>
                        But beyond all the jokes and funny memories, I am genuinely
                        grateful for your loyalty.
                    </p>

                    <p>
                        When things became difficult between 2023 and 2026, you continued
                        to stand by me. That is something I will always remember.
                    </p>

                    <p>
                        We may have gone to different colleges and our lives may have
                        taken different directions, but our friendship never completely
                        disappeared.
                    </p>

                    <p>
                        So on your birthday, I just want to say thank you — for the
                        memories, the laughter, the support, and for being a genuinely
                        good friend.
                    </p>

                    <p className="font-serif text-2xl font-bold text-[#FF6B81]">
                        Happy Birthday, Shrawan! 🎂
                    </p>

                    <p>
                        Here's to the memories we've made and all the ones still to come.
                    </p>

                </div>

                <div className="mt-10 rounded-2xl bg-[#FFE5EA] p-5 text-center">
                    <p className="font-semibold text-[#FF6B81]">
                        Friends since 2016 • Still friends in 2026 ❤️
                    </p>
                </div>

            </div>
        </div>
    );
}