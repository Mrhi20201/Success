import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, DollarSign, Landmark, Target } from 'lucide-react';
import Image from 'next/image';

const properties = [
  {
    name: 'Australia 108',
    location: 'Southbank, Melbourne',
    price: 'From AUD 500,000 to 5.5M+',
    description: 'Iconic super-tall residential building with breathtaking views of Melbourne\'s skyline',
    features: [
      'Floor-to-ceiling windows',
      'Private residents\' facilities',
      'Stunning city views',
      'World-class amenities'
    ],
    image: 'https://www.onlymelbourne.com.au/image/ico-au108.jpg'
  },
  {
    name: 'Crown Residences',
    location: 'One Barangaroo, Sydney',
    price: 'From AUD 9.5M to 100M+',
    description: 'Ultra-luxury apartments in Sydney\'s most prestigious waterfront location',
    features: [
      'Harbor views',
      'Six-star amenities',
      'Private concierge',
      'World-class design'
    ],
    image: 'https://onebarangaroo.com.au/images/home/1bg.jpg'
  }
];

const financialPlan = [
  {
    phase: 'Initial Savings',
    timeframe: '2025-2050',
    target: 'AUD 250,000',
    strategy: 'Maximum salary savings + performance bonuses'
  },
  {
    phase: 'Investment Growth',
    timeframe: '2025-2030',
    target: 'AUD 650,000',
    strategy: 'Rising to the Top of the Ranks'
  },
  {
    phase: 'Property Purchase',
    timeframe: '2030-2050',
    target: 'AUD 1M+',
    strategy: 'Purchase Property, (eg. Australia 108.)'
  }
];

export default function HousePricesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tighter sm:text-5xl">
          Dream Home Planning
        </h1>

        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Financial Strategy Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    icon: DollarSign,
                    title: 'Savings Goal',
                    value: 'AUD 500,000+'
                  },
                  {
                    icon: Building2,
                    title: 'Property Type',
                    value: 'Luxury Apartment'
                  },
                  {
                    icon: Landmark,
                    title: 'Timeline',
                    value: '20+ Years'
                  }
                ].map((stat) => (
                  <div key={stat.title} className="flex flex-col items-center gap-2 text-center">
                    <div className="rounded-full bg-primary/10 p-3">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold">{stat.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{stat.value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Target Properties</h2>
          <div className="grid gap-8">
            {properties.map((property) => (
              <Card key={property.name} className="overflow-hidden">
                <div className="relative h-[300px]">
                  <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{property.name}</CardTitle>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {property.location}
                      </p>
                    </div>
                    <Badge variant="secondary">{property.price}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-500 dark:text-gray-400">
                    {property.description}
                  </p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {property.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold">Financial Roadmap</h2>
          <div className="space-y-6">
            {financialPlan.map((phase) => (
              <Card key={phase.phase}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{phase.phase}</CardTitle>
                    <Badge>{phase.timeframe}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="mb-2 font-semibold">Target Amount</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {phase.target}
                      </p>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">Strategy</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {phase.strategy}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}