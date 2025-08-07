import React from "react";
import "./Certifications.css";
import ParticlesBg from "particles-bg";

const certifications = [
  {
    title: "Azure Data Engineer Associate",
    provider: "Microsoft",
    icon: "/icons/microsoft.png",
  },
  {
    title: "Azure Enterprise Data Analyst Associate",
    provider: "Microsoft",
    icon: "/icons/microsoft.png",
  },
  {
    title: "AWS Data Analytics Specialty",
    provider: "Amazon Web Services",
    icon: "/icons/aws.jpeg",
  },
  {
    title: "AWS Fundamentals",
    provider: "Amazon Web Services",
    icon: "/icons/aws.jpeg",
  },
  {
    title: "ITIL Foundation",
    provider: "ITIL",
    icon: "/icons/itil.png",
  },
];

const grouped = certifications.reduce((acc, cert) => {
  if (!acc[cert.provider]) acc[cert.provider] = [];
  acc[cert.provider].push(cert);
  return acc;
}, {});

const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <ParticlesBg type="cobweb" color="#ffffff" bg={true} />
      <h2 className="certifications-title" data-aos="fade-up">Certifications</h2>
      <div className="certification-groups">
        {Object.entries(grouped).map(([provider, certs], index) => (
          <div className="cert-provider-block" key={provider} data-aos="fade-up" data-aos-delay={index * 200}>
            <div className="provider-label">{provider} Certification</div>
            <div className="cert-grid">
              {certs.map((cert, idx) => (
                <div className="cert-card" key={idx}>
                  <img src={cert.icon} alt={cert.provider} className="cert-icon" />
                  <p className="cert-title">{cert.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
