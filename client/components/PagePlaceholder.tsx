interface PagePlaceholderProps {
  title: string;
  description: string;
}

export default function PagePlaceholder({
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <div className="min-h-screen bg-black py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <div className="w-24 h-1 bg-amber-500 mx-auto mb-8" />
        <p className="text-xl text-gray-300 mb-8">
          {description}
        </p>
        <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
          <p className="text-gray-400 mb-4">
            Hãy tiếp tục nhắn tin để tùy chỉnh nội dung của trang này.
          </p>
        </div>
      </div>
    </div>
  );
}
