'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header title="Think big. Start small." height="150px" color="#ffffff" textColor="text-black" />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex flex-col items-center justify-center py-8">
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 md:pr-12 mb-8 md:mb-0">
              <p className="mb-4">
                This is new text to test Vercel pulling from github.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ullamcorper eget nulla facilisi etiam dignissim diam. Erat nam at lectus urna. Quam viverra orci sagittis eu volutpat odio facilisis. A diam maecenas sed enim ut sem. Est ante in nibh mauris cursus.
              </p>
              <p className="mb-4">
                Tempor id eu nisl nunc mi ipsum faucibus. Ornare massa eget egestas purus viverra accumsan in nisl. Facilisis sed odio morbi quis commodo odio aenean sed. Facilisi etiam dignissim diam quis enim lobortis scelerisque. Neque convallis a cras semper auctor neque vitae tempus. Pellentesque habitant morbi tristique senectus et netus et malesuada.
              </p>
            </div>
            <div className="md:w-2/5 flex justify-center items-center">
              <Image
                src="/test_image.png"
                alt="Test Image"
                width={600}
                height={400}
                priority
              />
            </div>
          </div>
        </section>

{/* Card Section */}
<section className="mx-4 sm:mx-6 lg:mx-8 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Technology Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/technology-image-02.png"
                alt="Technology"
                className="w-full"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Technology</h2>
                <p className="text-gray-500 mb-2">Subtitle for Technology</p>
                <p className="mb-4">Explore our cutting-edge technology solutions.</p>
                <a
                  href="/technology"
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Library Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/library-image-02.png"
                alt="Library"
                className="w-full"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Library</h2>
                <p className="text-gray-500 mb-2">Subtitle for Library</p>
                <p className="mb-4">Discover our extensive resource library.</p>
                <a
                  href="/library"
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* About Us Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="/about-image-02.png"
                alt="About Us"
                className="w-full"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">About Us</h2>
                <p className="text-gray-500 mb-2">Subtitle for About Us</p>
                <p className="mb-4">Learn more about our company and mission.</p>
                <a
                  href="/about"
                  className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;