import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function QuestionsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold tracking-tighter sm:text-5xl">
          Questions and Reflections
        </h1>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>What does this artifact represent? What aspect of your future? How does it represent this?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
              The website represents my journey towards aviation and finance. The website shows my passion to pursue my future career goals. The artifact demonstrates my commitment to learning and growth.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How does this link with your personal opinion of what 'success' means?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                Success is about achieving excellence in areas I love, maintaining a 
                balanced and fulfilling lifestyle. The website reflects my definition of success. It shows how I plan to advance my career 
                to achieve the life I want to live.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What steps might be required to reach this specific aspect of your future life?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">Educational Requirements</h3>
                  <ul className="list-inside list-disc text-gray-500 dark:text-gray-400">
                    <li>Commercial Pilot License (CPL) with instrument rating</li>
                    <li>Aviation training and pilot certification</li>
                    <li>Specialized courses in aviation systems and safety</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Key Skills</h3>
                  <ul className="list-inside list-disc text-gray-500 dark:text-gray-400">
                    <li>Understanding of Safety and Management Regulations</li>
                    <li>Software Development</li>
                    <li>Safety Analysis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Personal Growth</h3>
                  <ul className="list-inside list-disc text-gray-500 dark:text-gray-400">
                    <li>Developing strong time management skills</li>
                    <li>Financial planning</li>
                    <li>Trying to Maintain a work-life balance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What potential setbacks or challenges could you face and how might you overcome them?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">Technical Challenges</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                  Rapid technological changes in AI and aviation could make it challenging to persue some careers. I plan to overcome this through learning and achieving goals that suit me.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Financial Challenges</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    The cost of training and certification in both fields can be full. with financial planning, and 
                    a part-time job, I could be able to attend a University/Education.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Time Management</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Balancing the demands of both fields could be time-intensive. But, by prioritising tasks effectively, I could use my time well.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Outline the drafting / planning process that took place to create your artifact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">Initial Planning</h3>
                  <ul className="list-inside list-disc text-gray-500 dark:text-gray-400">
                    <li>Research on engineering and aviation</li>
                    <li>key career paths to take</li>
                    <li>Required skills and qualifications</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Development Process</h3>
                  <ul className="list-inside list-disc text-gray-500 dark:text-gray-400">
                    <li>Creating a career development timeline</li>
                    <li>Planning educational requirements</li>
                    <li>Setting a somewhat realistic financial and professional goal</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Implementation</h3>
                  <ul className="list-inside list-disc text-gray-500 dark:text-gray-400">
                    <li>Building a website to show skills and goals</li>
                    <li>Creating plans for each career stage</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}