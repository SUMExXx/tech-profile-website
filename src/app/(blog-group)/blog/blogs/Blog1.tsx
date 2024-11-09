import { contents, skills } from "@/data/website";
import Image from "next/image";

export default function Blog1() {

  return (
    <div className="max-w-3xl mx-auto p-6 rounded-lg my-8 bg-transparent">
      {/* Blog Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-2">
          Exploring the Wonders of Nature
        </h1>
        <p className="text-gray-400">By Jane Doe | October 15, 2024</p>
      </div>

      {/* Featured Image */}
      <img
        src="https://via.placeholder.com/800x400"
        alt="Nature scenery"
        className="w-full h-auto rounded-md mt-6"
      />

      {/* Blog Content */}
      <div className="mt-6 text-gray-300 leading-relaxed">
        <p className="mb-4">
          Nature has an incredible ability to inspire and heal. From lush green
          forests to serene lakes and towering mountains, every corner of
          nature has something awe-inspiring to offer. In today’s blog, we’ll
          explore some of the most captivating natural wonders that everyone
          should experience at least once in their lifetime.
        </p>

        {/* Inline Image with Text */}
        <div className="flex items-center gap-4 my-6">
          <img
            src="https://via.placeholder.com/150x100"
            alt="Forest view"
            className="rounded-md w-48 h-auto"
          />
          <p>
            A walk through a dense forest with sunlight streaming through the
            trees is a magical experience. Forests provide a peaceful escape
            from the bustling world, offering quiet trails, chirping birds, and
            the rustle of leaves.
          </p>
        </div>

        <p className="mb-4">
          From the Amazon rainforest to the Rocky Mountains, nature provides a
          variety of landscapes to explore. Each ecosystem is unique,
          contributing to a diverse world filled with plants, animals, and
          natural formations.
        </p>

        {/* Quote */}
        <blockquote className="border-l-4 border-blue-400 pl-4 italic text-gray-400 mb-4">
          {`
          "In every walk with nature one receives far more than he seeks." – John
          Muir`
          }
        </blockquote>

        <p className="mb-4">
          Beyond forests, oceans cover about 70% of our planet and are filled
          with mysterious marine life, coral reefs, and underwater caves.
          Exploring underwater ecosystems reveals a world unlike any other,
          filled with vibrant colors and diverse species.
        </p>

        {/* Secondary Image */}
        <img
          src="https://via.placeholder.com/800x400"
          alt="Underwater view"
          className="w-full h-auto rounded-md my-6"
        />

        <p className="mb-4">
          Mountains offer breathtaking views, a sense of accomplishment upon
          reaching the summit, and an opportunity to witness nature from new
          heights. Hiking or simply observing mountains can be a deeply
          reflective experience, reminding us of the grandeur of nature.
        </p>

        {/* Call-to-Action Button */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
