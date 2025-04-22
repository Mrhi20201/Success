import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, Home, Target } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tighter sm:text-5xl">
          My Vision of Success
        </h1>
        
        <div className="mb-16">
          <div className="relative h-[300px] overflow-hidden rounded-xl">
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
              alt="Success Vision"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-0 p-8">
              <p className="max-w-[600px] text-xl text-white">
                "Success is a journey of achieving both professional excellence and personal fulfillment"
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <div className="rounded-lg bg-primary/10 p-2">
                <Briefcase className="h-6 w-6" />
              </div>
              <CardTitle>Dream Career</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
              A fulfilling career that excites me everyday I work, and that I have a true passion for.
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold">Key Aspirations:</h3>
                <ul className="list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400">
                  <li>Owning/Managing an Airport</li>
                  <li>Financial Advisor of a Company or Government.</li>
                  <li>Aviation Engineer.</li>
                </ul>
              </div>
              <Link href="/careers" className="mt-6 inline-flex items-center text-primary hover:underline">
                View Career Paths <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <div className="rounded-lg bg-primary/10 p-2">
                <Home className="h-6 w-6" />
              </div>
              <CardTitle>Dream Home</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                A beautiful home in the city or countryside, that is both great and aesthetic.
              </p>
              <div className="space-y-2">
                <h3 className="font-semibold">Desired Features:</h3>
                <ul className="list-inside list-disc space-y-1 text-gray-500 dark:text-gray-400">
                  <li>Modern architecture and design</li>
                  <li>Stunning city or Countryside views</li>
                  <li>Aesthetic Technology integration</li>
                  <li>Dedicated home office space</li>
                </ul>
              </div>
              <Link href="/house-prices" className="mt-6 inline-flex items-center text-primary hover:underline">
                Explore Ideal Housing Options 🏠 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Achievement Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  year: '2024 - 2030',
                  title: 'Foundation Building',
                  description: 'Complete school, uni and Search for Options',
                  badge: 'In Progress (Planned)'
                },
                {
                  year: '2030 - 2065',
                  title: 'Career Advancement',
                  description: 'Begin ranking up through a career path and achive the best I can.',
                  badge: 'Planned'
                },
                {
                  year: '2065-',
                  title: 'Property Investment',
                  description: 'Purchase dream home in preferred location',
                  badge: 'Future Goal'
                }
              ].map((milestone) => (
                <div key={milestone.year} className="flex items-start gap-4">
                  <div className="min-w-[100px] text-sm font-semibold">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold">{milestone.title}</h3>
                      <Badge variant="secondary">{milestone.badge}</Badge>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}