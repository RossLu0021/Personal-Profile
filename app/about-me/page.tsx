import Navbar from '@/components/me/navbar';
import Image from 'next/image';

export default function AboutMePage() {
  return (
    <>
      <Navbar className="bg-gray-400" />
      <main className="pt-20 pb-12 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 max-w-7xl mx-auto">
        <h1 className="text-center mb-12 text-4xl sm:text-5xl font-bold text-gray-800">
          About Me
        </h1>

        {/* Bio */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex-shrink-0">
            <Image
              src="/blank-profile.png"
              alt="Portrait of Lughan Ross"
              fill
              className="rounded-full object-cover shadow-lg border-4 border-white"
              sizes="(min-width: 640px) 256px, 192px"
              priority
            />
          </div>
          <div className="flex-1 space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Hello! I&apos;m <strong>Lughan Ross</strong>, a passionate
              software engineer dedicated to building intuitive and performant
              web applications. With a strong foundation in backend development,
              I love turning complex problems into elegant solutions.
            </p>
            <p>
              My journey in tech has been driven by curiosity and a desire to
              create. Whether it&apos;s crafting someone no one will use or
              optimizing backend logic, I approach every project with enthusiasm
              and attention to detail.
            </p>
          </div>
        </div>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              'React',
              'Next.js',
              'Ruby on Rails',
              'TypeScript',
              'Java',
              'JavaScript',
              'Tailwind CSS',
              'Node.js',
              'Git',
              'SQL',
              'HTML5',
              'CSS',
              'REST APIs',
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center font-medium text-gray-700 hover:shadow-md transition-shadow"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-2">
            Experience
          </h2>
          <div className="space-y-8">
            {/* Experience 1 */}
            <div className="relative pl-8 border-l-2 border-gray-300">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
              <h3 className="text-xl font-bold text-gray-800">
                Software Engineer Intern
              </h3>
              <p className="text-gray-600 mb-2">
                Mastercard | June 2025 - August 2025
              </p>
              <p className="text-gray-700">
                Developing scalable web applications using Next.js and
                TypeScript. Collaborating with cross-functional teams to deliver
                high-quality features.
              </p>
            </div>

            {/* Experience 2 */}
            <div className="relative pl-8 border-l-2 border-gray-300">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-400"></div>
              <h3 className="text-xl font-bold text-gray-800">
                Student Developer
              </h3>
              <p className="text-gray-600 mb-2">
                Ohio State University | 2024 - 2025
              </p>
              <p className="text-gray-700">
                Assisted in the development of websites. Implemented responsive
                websites and worked with mixed teams to enhance user experience.
              </p>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b pb-2">
            Education
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-gray-600">
              The Ohio State University | 2021 - 2025
            </p>
            <p className="text-gray-700 mt-2">
              Focus on Software Engineering and Data Structures. Graduated.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
