import { Education, Certification } from '../types';

export const education: Education[] = [
    {
        id: 'msc-liverpool',
        degree: 'MSc Big Data Science and High-Performance Computing',
        institution: 'University of Liverpool',
        period: '2022 - 2023',
        location: 'Liverpool, UK',
        highlights: ['Machine Learning', 'Distributed Computing', 'Advanced Analytics'],
    },
    {
        id: 'btech-gvp',
        degree: 'B.Tech Computer Science and Engineering',
        institution: 'GVP College of Engineering for Women',
        period: '2016 - 2020',
        location: 'India',
        highlights: ['Software Engineering', 'Data Structures', 'AI Fundamentals'],
    },
];

export const certifications: Certification[] = [
    {
        id: 'azure-data-analyst',
        title: 'Microsoft Certified: Azure Data Analyst Associate',
        issuer: 'Microsoft',
        icon: '☁️',
    },
    {
        id: 'ibm-ai-professional',
        title: 'IBM Applied AI Professional Certificate',
        issuer: 'IBM',
        icon: '🤖',
    },
    {
        id: 'aws-data-analytics',
        title: 'AWS Certified Data Analytics - Specialty',
        issuer: 'Amazon Web Services',
        icon: '📊',
    },
    {
        id: 'deep-learning-specialization',
        title: 'Deep Learning Specialization',
        issuer: 'DeepLearning.AI',
        icon: '🧠',
    },
];
