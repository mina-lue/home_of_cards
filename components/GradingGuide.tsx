import Image from 'next/image';

export default function GradingGuide() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Grading Guide</h2>
        <p className="text-lg text-gray-600 mb-10">Understand how your cards are graded with our comprehensive guide.</p>

        <div className="flex justify-center space-x-4 mb-8">
          <button className="px-6 py-2 rounded-full bg-red-600 text-white hover:bg-red-700">PSA</button>
          <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300">BGS</button>
          <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300">GMA</button>
          <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300">HGA</button>
          <button className="px-6 py-2 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300">SSG</button>
        </div>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec posuere quam. Suspendisse semper lobortis nisl, quis pulvinar arcu mollis eget.</p>

        <div className="flex justify-center space-x-4 mb-10">
          <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100">Edges</button>
          <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100">Corners</button>
          <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100">Centering</button>
          <button className="px-6 py-2 rounded-full border border-gray-300 text-gray-800 hover:bg-gray-100">Surface</button>
        </div>

        <Image src="/grading-guide-placeholder.png" alt="Grading Guide" width={500} height={300} className="mx-auto rounded-md" />
      </div>
    </section>
  );
}
