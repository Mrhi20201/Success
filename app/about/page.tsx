import { Card } from '@/components/ui/card';
import Image from 'next/image';

export const metadata = {
  title: 'My Journey | Succses',
  description: 'Learn about my journey.',
};

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tighter sm:text-5xl">
          My Journey
        </h1>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 leading-relaxed text-gray-500 dark:text-gray-400">
              As a student from Blackbunrn Highschool I'm passionate about my future career goals.
              My goal is to become both a specialist in teaching and/or a role in Aviation,
              combining this to contribute to the development of teaching and aviation 🗺️.
            </p>
            <p className="leading-relaxed text-gray-500 dark:text-gray-400">
              By advancing through school, I'm working to
              explore possible carrer paths that I personaly enjoy. this will allow me to bridge
              the gap between realistic career choices and fantasy careers.
            </p>
          </div>
          <Card className="overflow-hidden">
            <Image
              src="https://images.sbs.com.au/dims4/default/2ee9970/2147483647/strip/true/crop/1280x720+0+120/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2Fdrupal%2Fyourlanguage%2Fpublic%2Fmanjeet.jpg"
              alt="AI and Aviation"
              width={1000}
              height={1000}
              className="object-cover"
            />
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Hopeful Aspirations</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-semibold">Finance 🤔 </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Working with Governments, Banks, Businesses for a career in Finance. An Economist is a good example for a Aspiration I hope to achive one day 🌄.
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold">Business in Aviation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Owning or Working in an Aviation Buisiness eg. Airport Owner, Is a good goal I wish to achive If all goes well 👍
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}