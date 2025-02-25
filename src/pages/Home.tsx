import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, SparklesIcon, CpuChipIcon, ChartBarIcon } from '@heroicons/react/24/outline';

function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="pt-32 pb-24 hero-gradient relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8">
              Your AI-Powered <span className="gradient-text">Automation</span> Starts Here
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Seamless integrations and smart automation made easy. Transform your workflow with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10">
          <div className="w-[800px] h-[800px] bg-blue-100/30 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 feature-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <SparklesIcon className="h-8 w-8 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Smart Automation</h3>
              <p className="text-gray-600">
                Connect and automate your favorite tools effortlessly with our AI-powered platform.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <CpuChipIcon className="h-8 w-8 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">No-Code Simplicity</h3>
              <p className="text-gray-600">
                Build powerful workflows with our intuitive drag-and-drop interface.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card"
            >
              <ChartBarIcon className="h-8 w-8 text-blue-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Real-Time Insights</h3>
              <p className="text-gray-600">
                Track, analyze, and optimize your processes with detailed analytics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="py-24 bg-blue-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">
              Need Help? Talk to our AI Assistant
            </h2>
            <p className="text-gray-600 mb-12">
              Get instant answers and automate tasks with our AI chatbot
            </p>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
                <p className="text-gray-500 flex items-center">
                  <SparklesIcon className="h-5 w-5 mr-2" />
                  AI Assistant Coming Soon
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;