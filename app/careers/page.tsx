'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { StarButton } from '@/components/star-button';
import { careerPaths } from './career-paths';

export default function CareersPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tighter sm:text-5xl">
          Career Paths
        </h1>
        <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
          Explore various career paths in Management, aviation, and related technologies..
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {careerPaths.map((career) => (
          <Card 
            key={career.id} 
            className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative h-48">
              <Image
                src={career.image}
                alt={career.title}
                fill
                className="object-cover"
              />
              <StarButton careerId={career.id} />
            </div>
            <CardHeader>
              <CardTitle>{career.title}</CardTitle>
              <Badge variant="secondary">{career.category}</Badge>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {career.description}
              </p>

              <div>
                <h3 className="mb-2 font-semibold">Required Education</h3>
                <ul className="list-inside list-disc text-sm text-gray-500 dark:text-gray-400">
                  {career.education.map((edu) => (
                    <li key={edu}>{edu}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Key Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Career Progression</h3>
                <div className="flex flex-col gap-2">
                  {career.progression.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                    >
                      <span className="font-mono">{index + 1}.</span>
                      {step}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Salary Range</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {career.salaryRange}
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Resources</h3>
                <div className="flex flex-col gap-2">
                  {career.resources.map((resource) => (
                    <Link
                      key={resource.name}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline"
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}