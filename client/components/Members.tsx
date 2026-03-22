export interface Member {
  id: number;
  name: string;
  role: string;
  image: string;
  color: string;
}

interface MembersProps {
  members: Member[];
}

export default function Members({ members }: MembersProps) {
  return (
    <section className="py-16 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            MEET THE TEAM
          </h2>
          <div className="flex justify-center mt-4">
            <div className="relative w-48 h-[2px]">
              {/* line chính */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent" />

              {/* glow rộng */}
              <div className="absolute inset-0 blur-md bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-70" />

              {/* điểm sáng mạnh ở giữa */}
              <div className="absolute left-1/2 -translate-x-1/2 w-16 h-[6px] bg-amber-400 rounded-full blur-md opacity-90" />
            </div>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {members.map((member) => (
            <div key={member.id} className="group relative rounded-2xl">
              {/* 🌈 Glow blur OUTER (ánh sáng lan ra) */}
              <div
                className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"
                style={{
                  background: `radial-gradient(circle, ${member.color} 0%, transparent 70%)`,
                }}
              />

              {/* 🌟 Glow layer thứ 2 (đậm hơn, gần viền) */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-md"
                style={{
                  background: member.color,
                }}
              />

              {/* Card */}
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-gray-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
            w-full h-full object-cover
            group-hover:brightness-110
            transition duration-500
          "
                />

                {/* Overlay nhẹ */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500" />
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                <h3 className="text-white font-bold text-lg mb-1">
                  {member.name}
                </h3>
                <p
                  className="text-sm font-medium"
                  style={{ color: member.color }}
                >
                  {member.role}
                </p>
              </div>

              {/* Border nét */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  border: `1px solid ${member.color}`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
