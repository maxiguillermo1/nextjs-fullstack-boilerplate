import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WelcomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Next.js Full-Stack Boilerplate" />

      <main className="flex-1">
        <div className="grid min-h-[80vh] grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-sans sm:p-20">
          <div className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
            <div className="text-center sm:text-left">
              <h1 className="mb-4 text-4xl font-bold text-gray-900">
                Welcome to Your Next.js App! 🚀
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                This is a modern full-stack boilerplate with organized frontend
                and backend structure.
              </p>
            </div>

            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />

            <div className="max-w-2xl rounded-lg border border-blue-200 bg-blue-50 p-6">
              <h2 className="mb-3 text-xl font-semibold text-blue-900">
                ✨ What&apos;s Included
              </h2>
              <ul className="space-y-2 text-blue-800">
                <li>• Organized frontend/backend folder structure</li>
                <li>• TypeScript support throughout</li>
                <li>• API routes with authentication middleware</li>
                <li>• Reusable React components</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Ready for production deployment</li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <a
                className="bg-foreground text-background flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent px-4 text-sm font-medium transition-colors hover:bg-[#383838] sm:h-12 sm:w-auto sm:px-5 sm:text-base dark:hover:bg-[#ccc]"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={20}
                  height={20}
                />
                Deploy now
              </a>
              <a
                className="flex h-10 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm font-medium transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:w-auto sm:px-5 sm:text-base md:w-[158px] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the docs
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
