import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="Next.js Full-Stack Boilerplate" />
      
      <main className="flex-1">
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-[80vh] p-8 pb-20 gap-16 sm:p-20">
          <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Welcome to Your Next.js App! 🚀
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                This is a modern full-stack boilerplate with organized frontend and backend structure.
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

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl">
              <h2 className="text-xl font-semibold text-blue-900 mb-3">✨ What's Included</h2>
              <ul className="space-y-2 text-blue-800">
                <li>• Organized frontend/backend folder structure</li>
                <li>• TypeScript support throughout</li>
                <li>• API routes with authentication middleware</li>
                <li>• Reusable React components</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Ready for production deployment</li>
              </ul>
            </div>

            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
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
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
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
