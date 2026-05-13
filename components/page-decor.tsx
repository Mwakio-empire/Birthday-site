export default function PageDecor() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-6 top-28 h-24 w-24 rounded-full bg-[#f8dede]/40 blur-2xl" />
        <div className="absolute right-8 top-40 h-20 w-20 rounded-full bg-[#f3cfcf]/35 blur-2xl" />
        <div className="absolute bottom-24 left-10 h-28 w-28 rounded-full bg-[#f7e7e7]/50 blur-3xl" />
        <div className="absolute bottom-16 right-12 h-24 w-24 rounded-full bg-[#ecd3d3]/35 blur-2xl" />
      </div>

      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <span className="absolute left-[8%] top-[18%] text-xl text-[#d9a8a8]/50">
          ♡
        </span>
        <span className="absolute right-[12%] top-[22%] text-lg text-[#d9a8a8]/45">
          ✦
        </span>
        <span className="absolute left-[14%] bottom-[18%] text-lg text-[#d9a8a8]/40">
          ♡
        </span>
        <span className="absolute right-[18%] bottom-[14%] text-xl text-[#d9a8a8]/45">
          ✦
        </span>
      </div>
    </>
  );
}