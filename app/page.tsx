import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Plane, Target } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-8">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              My Future Aspirations 🏙️
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            What I aspire to achive in my future career and what I'm passionate about to achieve in the upcoming years.
              
            </p>
            <Link href="/about">
              <Button className="mt-4">
                About Me  <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="container px-4 md:px-6">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-lg bg-primary/10 p-3">
              <Brain className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Teaching</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Teaching and working with others in a Industry
              
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-lg bg-primary/10 p-3">
              <Plane className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Aviation</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Working towards pilot certification and understanding advanced flight
              systems. (eg. air trafic control)
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-lg bg-primary/10 p-3">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Future Goals</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Achive my future Goal's and Aspirations!
              
            </p>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative h-[300px] overflow-hidden rounded-lg md:h-[400px]">
            <Image
              src="https://i.imgur.com/IQVPmqW.jpg"
              alt="AI Technology"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold">The Future of Flight</h2>
            <p className="mb-6 text-gray-500 dark:text-gray-400">
            Exploring careers in both aviation and teaching is a key part of my journey. I am to keep on progressing in my Skills for future growth and development.
            </p>
            <Link href="/questions">
              <Button variant="outline">
                Read About My Plan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}