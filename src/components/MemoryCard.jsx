export default function MemoryCard({
    memory,
    index,
}) {
    const backgrounds = [
        "bg-white",
        "bg-[#FFE5EA]",
        "bg-[#EDEBFF]",
        "bg-[#FFF3C4]",
    ];

    return (
        <article
            className={`rounded-3xl border border-black/5 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-9 ${backgrounds[index % backgrounds.length]}`}
        >

            <div className="flex items-start justify-between gap-5">

                <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-[#FF6B81]">
                        {memory.year}
                    </p>

                    <h3 className="mt-2 font-serif text-2xl font-black text-[#263238] sm:text-3xl">
                        {memory.title}
                    </h3>

                    <p className="mt-2 text-sm font-semibold text-[#7C83FD]">
                        {memory.subtitle}
                    </p>
                </div>

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                    {memory.icon}
                </div>

            </div>

            <p className="mt-6 leading-8 text-[#59636A]">
                {memory.text}
            </p>

        </article>
    );
}