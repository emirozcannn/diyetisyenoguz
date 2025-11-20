'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, GraduationCap, Briefcase, FileText, BookOpen, Quote as QuoteIcon, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { client } from '@/lib/sanity/client';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source: unknown) {
  return builder.image(source as Parameters<typeof builder.image>[0]);
}

interface AboutData {
  hero: {
    title: string;
    subtitle: string;
    profileImage?: unknown;
    badges?: Array<{ icon: string; text: string }>;
  };
  biography: {
    title: string;
    content: Array<{ _type: 'block'; [key: string]: unknown }>;
    stats: Array<{ value: string; label: string; color: string }>;
  };
  quote: {
    text: string;
    author?: string;
  };
  education: Array<{
    degree: string;
    institution: string;
    year: string;
    description?: string;
    color: string;
  }>;
  experience: Array<{
    position: string;
    company: string;
    period: string;
    description?: string;
    color: string;
  }>;
  certificates: Array<{
    title: string;
    issuer: string;
    year: string;
    image?: unknown;
  }>;
  publications: Array<{
    title: string;
    type: string;
    year: string;
    description: string;
    link?: string;
  }>;
}

const iconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  Award,
  Users,
  GraduationCap,
  Briefcase,
};

const colorMap: Record<string, string> = {
  primary: 'from-primary-500 to-primary-600',
  emerald: 'from-emerald-500 to-green-500',
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  secondary: 'from-secondary-500 to-secondary-600',
  accent: 'from-accent-500 to-accent-600',
};

const borderColorMap: Record<string, string> = {
  primary: 'border-primary-500',
  secondary: 'border-secondary-500',
  accent: 'border-accent-500',
  emerald: 'border-emerald-500',
  blue: 'border-blue-500',
  purple: 'border-purple-500',
  pink: 'border-pink-500',
};

export default function HakkimdaPage() {
  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch<AboutData>('*[_type == "aboutPage"][0]')
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section - Diyetisyen Temalı Original Design */}
      <section className="relative overflow-hidden bg-linear-to-br from-emerald-50 via-green-50/30 to-teal-50 py-24">
        {/* Organic Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-green-300/30 to-emerald-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-linear-to-tl from-teal-300/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-linear-to-br from-lime-300/20 to-green-300/20 rounded-full blur-2xl animate-pulse"></div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <motion.h1
                  className="text-6xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-white">{data.hero.title}</span>
                </motion.h1>
                <motion.p
                  className="text-xl text-white/90 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {data.hero.subtitle}
                </motion.p>
              </div>

              {data.hero.badges && data.hero.badges.length > 0 && (
                <motion.div
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {data.hero.badges.map((badge, idx) => {
                    const Icon = iconMap[badge.icon] || Award;
                    return (
                      <div
                        key={idx}
                        className="flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md rounded-2xl border border-green-200 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                      >
                        <Icon className="text-green-600" size={24} />
                        <span className="font-semibold text-gray-800">{badge.text}</span>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative">
                {data.hero.profileImage ? (
                  <Image
                    src={urlFor(data.hero.profileImage).width(600).height(600).url()}
                    alt={data.hero.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-linear-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-lg font-semibold">
                    Profil Fotoğrafı
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-green-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-linear-to-br from-yellow-400 to-orange-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-linear-to-br from-teal-400 to-cyan-400 rounded-full blur-2xl opacity-40"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biography Section - Custom Design */}
      <section className="section-padding">
        <div className="container-custom max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gradient">{data.biography.title}</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Decorative quote mark */}
            <div className="absolute -left-8 -top-8 text-8xl text-green-200 font-serif opacity-50 select-none">&ldquo;</div>

            <div className="bg-linear-to-br from-green-50 via-white to-teal-50 p-12 rounded-3xl border border-green-100 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-bl from-green-200/30 to-transparent rounded-full blur-3xl"></div>
              <div className="prose prose-lg max-w-none relative z-10">
                <PortableText value={data.biography.content} />
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          {data.biography.stats && data.biography.stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
            >
              {data.biography.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`p-8 bg-linear-to-br ${colorMap[stat.color] || colorMap.primary} rounded-2xl text-center text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2`}
                >
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-white/90 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Quote Section */}
      {data.quote && data.quote.text && (
        <section className="section-padding bg-linear-to-br from-primary-600 via-emerald-600 to-teal-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
          </div>

          <div className="container-custom max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <QuoteIcon className="w-16 h-16 text-white/30 mx-auto mb-8" />
              <blockquote className="text-3xl md:text-4xl font-serif text-white leading-relaxed mb-8 italic">
                &ldquo;{data.quote.text}&rdquo;
              </blockquote>
              {data.quote.author && (
                <p className="text-xl text-white/90 font-semibold">— {data.quote.author}</p>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Education & Experience - Improved Design */}
      <section className="section-padding bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-r from-primary-100/40 to-emerald-100/40 rounded-full blur-3xl"></div>

        <div className="container-custom max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="p-4 bg-gradient-primary rounded-2xl shadow-lg">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <h2 className="text-4xl font-bold">Eğitim</h2>
              </div>

              <div className="space-y-6">
                {data.education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-6 bg-white rounded-2xl shadow-lg border-l-4 ${borderColorMap[edu.color] || borderColorMap.primary} hover:shadow-xl transition-all hover:-translate-x-2`}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{edu.degree}</h3>
                    <p className="text-gray-700 font-medium mb-2 flex items-center gap-2">
                      <span className={`w-2 h-2 ${borderColorMap[edu.color]?.replace('border-', 'bg-')} rounded-full`}></span>
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 font-semibold">{edu.year}</p>
                    {edu.description && <p className="text-sm text-gray-600 mt-3 pl-4 border-l-2 border-gray-200">{edu.description}</p>}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="p-4 bg-linear-to-br from-emerald-500 to-green-600 rounded-2xl shadow-lg">
                  <Briefcase className="text-white" size={32} />
                </div>
                <h2 className="text-4xl font-bold">Deneyim</h2>
              </div>

              <div className="space-y-6">
                {data.experience.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-6 bg-white rounded-2xl shadow-lg border-l-4 ${borderColorMap[exp.color] || borderColorMap.accent} hover:shadow-xl transition-all hover:-translate-x-2`}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{exp.position}</h3>
                    <p className="text-gray-700 font-medium mb-2 flex items-center gap-2">
                      <span className={`w-2 h-2 ${borderColorMap[exp.color]?.replace('border-', 'bg-')} rounded-full`}></span>
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 font-semibold mb-3">{exp.period}</p>
                    {exp.description && <p className="text-sm text-gray-600 pl-4 border-l-2 border-gray-200">{exp.description}</p>}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificates Section - NEW */}
      {data.certificates && data.certificates.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block p-4 bg-gradient-primary rounded-2xl shadow-lg mb-6">
                <Award className="text-white" size={40} />
              </div>
              <h2 className="text-4xl font-bold mb-4">Sertifikalar</h2>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.certificates.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all hover:-translate-y-2">
                    {cert.image && (
                      <div className="relative h-64 bg-gray-100">
                        <Image
                          src={urlFor(cert.image).width(400).height(300).url()}
                          alt={cert.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                      <p className="text-gray-600 mb-1">{cert.issuer}</p>
                      <p className="text-sm text-primary-600 font-semibold">{cert.year}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Publications/Thesis Section - NEW */}
      {data.publications && data.publications.length > 0 && (
        <section className="section-padding bg-linear-to-b from-gray-50 to-white">
          <div className="container-custom max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block p-4 bg-linear-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg mb-6">
                <FileText className="text-white" size={40} />
              </div>
              <h2 className="text-4xl font-bold mb-4">Yayınlar & Çalışmalar</h2>
              <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-cyan-600 mx-auto rounded-full"></div>
            </motion.div>

            <div className="space-y-6">
              {data.publications.map((pub, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="p-3 bg-linear-to-br from-blue-500 to-cyan-600 rounded-xl">
                        <BookOpen className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">{pub.type}</span>
                          <span className="text-sm text-gray-500 font-medium">{pub.year}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{pub.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{pub.description}</p>
                      </div>
                    </div>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-100 hover:bg-primary-100 rounded-xl transition-colors group"
                      >
                        <ExternalLink className="text-gray-600 group-hover:text-primary-600" size={20} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
