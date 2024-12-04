import React from 'react';
import { History, Users, Target, Award } from 'lucide-react';

const milestones = [
  {
    year: 2005,
    title: 'Founded in Delaware',
    description: 'Started with a vision to revolutionize software distribution'
  },
  {
    year: 2010,
    title: 'National Expansion',
    description: 'Expanded operations across all major US tech hubs'
  },
  {
    year: 2015,
    title: 'Cloud Innovation',
    description: 'Launched comprehensive cloud services platform'
  },
  {
    year: 2023,
    title: 'Global Reach',
    description: 'Serving clients across 30+ countries'
  }
];

export function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                alt="CloudSpan Office"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Beginning</h3>
              <p className="text-gray-600 mb-6">
                Founded in 2005 in Delaware, CloudSpan Technology began with a simple yet ambitious vision: to transform how businesses access and utilize software. Our founders, seasoned tech industry veterans, recognized the growing need for efficient software distribution in an increasingly digital world.
              </p>
              <p className="text-gray-600">
                What started as a small team working from a modest office in Wilmington has grown into a leading force in enterprise software distribution and cloud solutions. Through dedication to innovation and customer success, we've built lasting partnerships with global technology leaders and helped countless businesses embrace digital transformation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative p-6 bg-gray-50 rounded-lg">
                <div className="text-blue-600 text-2xl font-bold mb-2">
                  {milestone.year}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {milestone.title}
                </h4>
                <p className="text-gray-600">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <p className="text-gray-600">Enterprise Clients</p>
            </div>
            <div className="text-center">
              <Target className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">30+</div>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div className="text-center">
              <History className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">18+</div>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="text-center">
              <Award className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
              <p className="text-gray-600">Industry Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}