import MemoryCard from "./MemoryCard";

const memories = [
    {
        year: "2016",
        title: "Where It All Began",
        subtitle: "6th Grade",
        icon: "📚",
        text: "Our friendship began in 6th grade in 2016. At the time, we were simply two school friends. Neither of us knew that this ordinary school friendship would become a bond that would last for more than a decade.",
    },
    {
        year: "6th Grade",
        title: "The Social Studies Incident",
        subtitle: "One of our first legendary memories",
        icon: "🏫",
        text: "During a Social Studies class, Shrawan started teasing me. I decided to complain to our teacher. What happened next became one of our earliest unforgettable memories — Sir slapped Shrawan. Years later, it became one of those school stories we could look back on and laugh about.",
    },
    {
        year: "7th Grade",
        title: "The Legendary Pant Incident",
        subtitle: "A memory nobody could forget",
        icon: "😂",
        text: "One day, Shrawan's pants were torn. Instead of quietly telling him, I announced it loudly in front of everyone — boys, girls, classmates, and even the teacher. I shouted, \"Shrawan! Your pants are torn! Take this pant!\" There was absolutely no privacy. It remains one of our funniest school memories.",
    },
    {
        year: "School Days",
        title: "The Friend Who Chose to Stay",
        subtitle: "Loyalty matters",
        icon: "🤝",
        text: "There was a time when some of our other friends decided that they would stop talking to me. But Shrawan didn't simply follow everyone else. He continued talking to me. That showed me that his friendship was genuine and that loyalty mattered more to him than following the crowd.",
    },
    {
        year: "Exams",
        title: "The Study Partner Who Betrayed Me",
        subtitle: "Correct answers... until the exam 😂",
        icon: "📖",
        text: "Whenever we studied together, I would give Shrawan the correct answers and help him understand his doubts. But when the actual exam arrived, things suddenly changed. Whenever he asked me for an answer during the exam, I would confidently tell him the wrong answer. During studying: correct answers. During the exam: complete betrayal.",
    },
    {
        year: "After 11th",
        title: "Different Colleges, Same Friendship",
        subtitle: "Distance didn't change everything",
        icon: "🎓",
        text: "After 11th grade, we went to different colleges and became busy with our own lives. We could no longer meet every day like we did in school. But the distance didn't end our friendship. We still made an effort to stay connected and usually talked at least once a week.",
    },
    {
        year: "Every Year",
        title: "The Forgotten Birthday",
        subtitle: "A talent Shrawan somehow mastered 😂",
        icon: "🎂",
        text: "Shrawan has a funny habit of forgetting things — and somehow, my birthday has become one of them. It has happened more than once. Meanwhile, I somehow never forget his birthday. Maybe forgetting birthdays is just another part of our friendship story.",
    },
    {
        year: "2023 — 2026",
        title: "When Friendship Really Mattered",
        subtitle: "The difficult years",
        icon: "❤️",
        text: "The most meaningful chapter of our friendship came during the difficult phase from 2023 to 2026. When I was struggling and going through challenging situations, Shrawan continued to stand by me. He didn't disappear when things became difficult. He stayed, supported me, and remained a friend when I needed one.",
    },
];

export default function FriendshipTimeline() {
    return (
        <section id="memories" className="bg-[#FFF9F2] px-6 py-24">

            <div className="mx-auto max-w-6xl">

                <div className="mb-16 text-center">

                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#FF6B81]">
                        The Timeline
                    </p>

                    <h2 className="mt-4 font-serif text-4xl font-black text-[#263238] sm:text-6xl">
                        Our Story
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-[#6B7280]">
                        From silly school incidents to the moments that truly mattered.
                    </p>

                </div>

                <div className="grid gap-7 md:grid-cols-2">
                    {memories.map((memory, index) => (
                        <MemoryCard
                            key={memory.title}
                            memory={memory}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}