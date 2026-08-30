export default function FloatingDecor() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

            <span className="absolute left-[8%] top-[20%] animate-pulse text-2xl opacity-40">
                ✦
            </span>

            <span className="absolute right-[10%] top-[30%] animate-bounce text-xl opacity-30">
                ♥
            </span>

            <span className="absolute bottom-[25%] left-[12%] text-2xl opacity-30">
                ✨
            </span>

            <span className="absolute bottom-[15%] right-[15%] animate-pulse text-xl opacity-30">
                ✦
            </span>

        </div>
    );
}