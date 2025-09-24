"use client";

import { CloudIcon, ShieldCheckIcon, ArchiveBoxIcon, ArrowPathIcon, ChartBarIcon, FilmIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  { icon: ShieldCheckIcon, title: "Secure", description: "Strong security with encryption, access control policies, and IAM integration." },
  { icon: ArchiveBoxIcon, title: "Durable", description: "Data is redundantly stored across multiple devices, ensuring 99.999999999% durability." },
  { icon: CloudIcon, title: "Scalable", description: "S3 scales automatically to handle growing data volumes and high request rates." }
];

const useCases = [
  { icon: ArrowPathIcon, title: "Backup & Restore", description: "Store backups with easy restore options for disaster recovery." },
  { icon: GlobeAltIcon, title: "Static Website Hosting", description: "Host static websites directly from an S3 bucket with low cost." },
  { icon: ChartBarIcon, title: "Data Lake & Analytics", description: "Store structured and unstructured data for analytics and ML." },
  { icon: FilmIcon, title: "Media Hosting", description: "Store and distribute images, videos, and other large media files globally." }
];

const fadeInAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2, duration: 0.5 }
};


const HeroSection = () => (
  <section className="relative text-center px-6 py-28 md:py-36 overflow-hidden">
    {/* IMPROVEMENT: New background gradient with teal */}
    <div className="absolute inset-0 z-0 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#14b8a6_100%)] opacity-20"></div>
    <div className="absolute inset-0 z-1 bg-gradient-to-br from-white via-gray-50 to-white/0"></div>
    
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 max-w-4xl mx-auto"
    >
      <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-500/10 backdrop-blur-sm rounded-full mb-8 border border-teal-500/20 shadow-lg">
        <CloudIcon className="w-10 h-10 text-teal-500" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
        Amazon S3
      </h1>
      <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-10">
        Simple Storage Service — Store and retrieve any amount of data, from anywhere.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <motion.a
          href="https://aws.amazon.com/s3/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full bg-teal-500 text-white font-bold shadow-lg shadow-teal-500/20"
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Get Started
        </motion.a>
        <motion.button
          className="px-8 py-4 rounded-full bg-white text-gray-900 font-bold border border-gray-200"
          whileHover={{ scale: 1.05, y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Watch Demo
        </motion.button>
      </div>
    </motion.div>
  </section>
);

const StatsBar = () => (
  <section className="bg-gray-50 py-12 border-y border-gray-200">
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      <div className="text-gray-900"><div className="text-3xl md:text-4xl font-bold">99.9%</div><div className="text-sm text-gray-500">Uptime SLA</div></div>
      <div className="text-gray-900"><div className="text-3xl md:text-4xl font-bold">11 9's</div><div className="text-sm text-gray-500">Durability</div></div>
      <div className="text-gray-900"><div className="text-3xl md:text-4xl font-bold">Exabytes</div><div className="text-sm text-gray-500">Of Data Stored</div></div>
      <div className="text-gray-900"><div className="text-3xl md:text-4xl font-bold">200+</div><div className="text-sm text-gray-500">Global Regions</div></div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <motion.div
    variants={fadeInAnimation}
    className="group relative p-8 rounded-2xl bg-white shadow-sm border border-gray-200 hover:border-transparent transition-all duration-300 overflow-hidden"
  >
    <div className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-teal-500/30 blur-xl"></div>
    <div className="relative">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-teal-100 rounded-xl mb-6">
        <Icon className="w-7 h-7 text-teal-600" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const FeaturesSection = () => (
  <section className="px-6 py-24 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <motion.div variants={fadeInAnimation} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Amazon S3?</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">Industry-leading object storage with unmatched durability, security, and performance.</p>
      </motion.div>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => <FeatureCard key={index} {...feature} />)}
      </div>
    </div>
  </section>
);

const UseCaseCard = ({ icon: Icon, title, description }: any) => (
  <motion.div variants={fadeInAnimation} className="group p-8 border border-gray-200 rounded-2xl bg-white hover:bg-teal-50/50 transition-colors duration-300">
    <div className="inline-flex items-center justify-center w-14 h-14 bg-gray-100 rounded-xl mb-6 group-hover:bg-teal-100 transition-colors">
      <Icon className="w-7 h-7 text-gray-600 group-hover:text-teal-600" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
    <p className="text-gray-700 leading-relaxed">{description}</p>
  </motion.div>
);

const UseCasesSection = () => (
  <section className="px-6 py-24 bg-white">
    <div className="max-w-6xl mx-auto">
      <motion.div variants={fadeInAnimation} initial="initial" whileInView="animate" viewport={{ once: true }} className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Powerful Use Cases</h2>
        <p className="text-xl text-gray-700">Trusted by millions of customers worldwide.</p>
      </motion.div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {useCases.map((useCase, index) => <UseCaseCard key={index} {...useCase} />)}
      </div>
    </div>
  </section>
);

const CtaSection = () => (
  <section className="px-6 py-24 bg-gray-900 text-white">
    <motion.div variants={fadeInAnimation} initial="initial" whileInView="animate" viewport={{ once: true }} className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
      <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Join millions of customers who trust Amazon S3 for their most critical data storage needs.</p>
      <motion.a
        href="https://aws.amazon.com/s3/"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-4 rounded-full bg-teal-500 text-white font-bold shadow-lg shadow-teal-500/20"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Start Your Free Trial
      </motion.a>
      <p className="text-sm text-gray-400 mt-6">No credit card required • Free tier includes 5GB storage</p>
    </motion.div>
  </section>
);

export default function S3() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      <UseCasesSection />
      <CtaSection />
    </main>
  );
}