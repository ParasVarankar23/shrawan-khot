export default function StoryIntro() {
    return (
        <section
            id="story"
            className="border-y border-[#FFE5EA] bg-white px-6 py-24"
        >
            <div className="mx-auto max-w-4xl text-center">

                <div className="mb-5 text-4xl">📖</div>

                <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#FF6B81]">
                    Our Story
                </p>

                <h2 className="mt-4 font-serif text-4xl font-black text-[#263238] sm:text-5xl">
                    Some friendships begin in a classroom.
                </h2>

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#6B7280]">
                    Ours began in 6th grade in 2016. What started as an ordinary school
                    friendship slowly became a collection of jokes, arguments,
                    embarrassing moments, unforgettable memories, and genuine support.
                </p>

                <div className="mt-10 flex justify-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#FF6B81]" />
                    <span className="h-2 w-2 rounded-full bg-[#FFD166]" />
                    <span className="h-2 w-2 rounded-full bg-[#7C83FD]" />
                </div>

            </div>
        </section>
    );
}