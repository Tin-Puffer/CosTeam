import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full bg-black overflow-hidden min-h-[100px]">
      {/* Background image */}
      <div className="absolute inset-0 bg-black">
        {/* ảnh */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat max-w-7xl mx-auto"
          style={{
            backgroundImage: 'url("/images/group-hero.jpg")',
          }}
        />

        {/* lớp fade */}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/90" />

      {/* Content wrapper */}
      <div className="relative z-10 min-h-[700px] flex flex-col px-4 sm:px-6 lg:px-8">
        {/* Content pushed to bottom */}
        <div className="mt-auto pb-12 text-center w-full max-w-2xl mx-auto">
          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl  font-black text-white mb-4 tracking-wider drop-shadow-lg">
            OUR COSPLAY TEAM
            <div className="flex justify-center mt-4">
              <div className="relative w-48 h-[2px]">
                {/* line chính */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

                {/* glow rộng */}
                <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-90" />

                {/* điểm sáng mạnh ở giữa */}
                <div className="absolute left-1/2 -translate-x-1/2 w-16 h-[6px] bg-amber-400 rounded-full blur-md opacity-90" />
              </div>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-xl text-gray-200 mb-8 leading-relaxed drop-shadow-md">
            We don't just cosplay — we live in the character.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <Link
              to="/members"
              className="px-6 py-2 bg-amber-600 text-white font-bold text-sm transition duration-300 border-2 border-amber-500 hover:border-amber-400 hover:bg-amber-700"
              style={{
                textShadow: "0 0 10px rgba(0,0,0,0.5)",
                boxShadow: "0 0 20px rgba(217, 119, 6, 0.4)",
              }}
            >
              XEM THÀNH VIÊN
            </Link> */}

            <Link
              to="/members"
              className="btn-image text-white font-bold text-sm uppercase "
            >
              OUR MEMBERS
            </Link>

            {/* <Link
              to="/gallery"
              className="px-6 py-2 bg-transparent text-green-400 font-bold text-sm transition duration-300 border-2 border-green-500 hover:border-green-300 hover:text-green-300"
              style={{
                textShadow: "0 0 10px rgba(0,0,0,0.5)",
                boxShadow: "0 0 20px rgba(34, 197, 94, 0.3)",
              }}
            >
              XEM GALLERY
            </Link> */}
            <Link to="/gallery" className="btn-green">
              VIEW GALLERY
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
