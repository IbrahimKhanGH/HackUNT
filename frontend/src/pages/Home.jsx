import React from 'react';
import { Link } from 'react-router-dom';

// Simple custom Card component with refined styling
const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 ${className}`}
    >
      {children}
    </div>
  );
};

// Custom Icons
const DollarIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

const ChartIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="20" x2="18" y2="10"></line>
    <line x1="12" y1="20" x2="12" y2="4"></line>
    <line x1="6" y1="20" x2="6" y2="14"></line>
  </svg>
);

const ShieldIcon = () => (
  <svg
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const CalculatorIcon = () => (
  <svg
    className="h-32 w-32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" x2="16" y1="6" y2="6" />
    <line x1="8" x2="16" y1="10" y2="10" />
    <line x1="8" x2="16" y1="14" y2="14" />
    <line x1="8" x2="16" y1="18" y2="18" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-green-500 mr-2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path d="M5 13l4 4L19 7"></path>
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#025742] to-emerald-800 rounded-2xl overflow-hidden">
            <div className="px-6 lg:px-12 py-12 lg:py-16">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h1 className="text-4xl font-bold mb-2 text-white">FinTeach</h1>
                <p className="text-lg text-white/90">Financial Planning for Texas Teachers</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div className="lg:text-left text-center">
                  <h2 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 text-white">
                    Take Control of Your Financial Future
                  </h2>
                  <p className="text-lg text-white/90 mb-6">
                    Smart budgeting, retirement planning, and investment tools designed exclusively
                    for educators.
                  </p>
                  <div className="flex space-x-4 justify-center lg:justify-start">
                    <Link
                      to="/signup"
                      className="inline-flex items-center px-6 py-3 bg-white text-[#025742] rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-sm"
                    >
                      Get Started
                    </Link>
                    <Link
                      to="/retirement"
                      className="inline-flex items-center px-6 py-3 border border-white/30 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>

                <div className="hidden lg:block">
                  <div className="bg-white/10 rounded-xl p-6">
                    <div className="aspect-video bg-white/5 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <img src="src/assets/teacher.svg" alt="Teacher" className="h-50 w-50 text-white/80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <div className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <DollarIcon className="text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Average Savings</p>
                  <h3 className="text-2xl font-bold text-gray-900">$12,500</h3>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <ChartIcon className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">TRS Benefits</p>
                  <h3 className="text-2xl font-bold text-gray-900">$4,200/mo</h3>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <ShieldIcon className="text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">Protected</p>
                  <h3 className="text-2xl font-bold text-gray-900">100%</h3>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Comprehensive Financial Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your finances and plan for retirement.
          </p>
        </div>

        {/* Updated Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="col-span-2">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Personalized Retirement Planning',
                    description: 'Customized plans based on your unique goals.',
                    icon: '/icons/retirement-planning.svg',
                  },
                  {
                    title: 'Pension Calculator',
                    description: 'Estimate your future pension benefits easily.',
                    icon: '/icons/pension-calculator.svg',
                  },
                  {
                    title: 'Budget Tracking',
                    description: 'Monitor and categorize your expenses effortlessly.',
                    icon: '/icons/budget-tracking.svg',
                  },
                  {
                    title: 'Investment Portfolio Management',
                    description: 'Optimize your 403(b) and other investments.',
                    icon: '/icons/investment-management.svg',
                  },
                  {
                    title: 'Debt Management Solutions',
                    description: 'Strategies to pay off student loans faster.',
                    icon: '/icons/debt-management.svg',
                  },
                  {
                    title: 'Tax Deduction Assistance',
                    description: 'Maximize your savings with tax-efficient strategies.',
                    icon: '/icons/tax-planning.svg',
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0">
                      {/*<img
                        src={feature.icon}
                        alt={feature.title}
                        className="h-8 w-8 text-green-500"
                      />*/}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-md font-semibold text-gray-900">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  'Tailored for Texas Teachers',
                  'Secure and Confidential',
                  'Easy-to-Use Interface',
                  'Expert Financial Advice',
                  'Community Support',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start text-sm text-gray-600">
                    <CheckIcon />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden">
            <div className="relative">
              {/* Background gradient with opacity */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#025742] to-emerald-800 opacity-95"></div>

              {/* Content */}
              <div className="relative p-8 md:p-12 lg:p-16 text-center">
                <h2 className="text-3xl font-bold mb-4 text-white drop-shadow-sm">
                  Start Your Financial Journey Today
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-medium">
                  Join thousands of Texas teachers who are securing their financial future.
                </p>
                <Link
                  to="/signup"
                  className="inline-flex items-center px-8 py-4 bg-white text-[#025742] rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-sm"
                >
                  Create Your Account
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
