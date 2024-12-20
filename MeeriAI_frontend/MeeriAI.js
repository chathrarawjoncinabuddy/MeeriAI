// src/components/ContactUs.js
import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import './MeeriAI.css'; // Add your custom styles*/
import Header from '../components/Header';
import Footer from '../components/Footer';


const MeeriAI = () => {
    const videoRef = useRef(null);
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);

    // Initialize camera feed
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
    }
  };

  // Send data to backend for processing
  const startScan = async () => {
    setLoading(true);
    setResult("");
    try {
      const response = await fetch("/start_scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      if (data.success) {
        setResult(`Scan Successful: ${data.data.iris_data}`);
      } else {
        setResult(`Error: ${data.error}`);
      }
    } catch (err) {
      setResult(`Loading....`);
    } finally {
      setLoading(false);
    }
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is MeeriAI, and how does it revolutionize biometric identity verification?",
      answer:
        "MeeriAI is an innovative platform that uses AI and NVIDIA DeepStream SDK to deliver highly secure and efficient biometric identity verification through advanced iris scanning technology. It sets a new standard in security by combining speed, accuracy, and reliability.",
    },
    {
      question: "How does MeeriAI ensure the security and privacy of my biometric data?",
      answer:
        "MeeriAI guarantees the utmost security and privacy by utilizing military-grade encryption protocols and decentralized storage methods. This ensures that your sensitive biometric data is fully protected from unauthorized access and breaches.",
    },
    {
      question: "Why is iris scanning considered one of the most reliable methods for biometric verification??",
      answer:
        "Iris scanning is highly reliable because the pattern of each person's iris is unique and remains unchanged throughout their life. Unlike fingerprints or facial recognition, it is incredibly difficult to forge and provides unmatched accuracy across diverse conditions.",
    },
    {
        question: "Can MeeriAI handle real-time identity verification for applications requiring instant results?",
        answer:
          "Yes, MeeriAI is built for real-time performance, making it ideal for applications such as airport security checks, financial transactions, and enterprise-level access controls, where instant and secure identity verification is essential..",
      },
      {
        question: "Is MeeriAI compliant with the latest global privacy and data protection regulations like GDPR and CCPA?",
        answer:
          "Absolutely! MeeriAI has been developed with a privacy-first approach, adhering to global privacy laws and standards, including GDPR and CCPA. This ensures your data is handled responsibly and ethically.",
      },
      {
        question: "Is MeeriAI compatible with existing devices and systems, or do I need additional hardware?",
        answer:
          "MeeriAI is designed to integrate seamlessly with most modern cameras and computing systems. In most cases, no additional hardware is needed, making deployment cost-effective and hassle-free.",
      },
      {
        question: "What industries can benefit the most from implementing MeeriAI’s biometric identity verification solutions?",
        answer:
          "Industries such as banking, e-commerce, healthcare, government services, and travel can significantly benefit from MeeriAI. It enhances security, streamlines processes, and builds trust in identity verification.",
      },
      {
          question: "How can I begin using MeeriAI to enhance the security and efficiency of my business operations?",
          answer:
            "To get started with MeeriAI, simply visit our 'Contact Us' page or click the 'Get Started Now' button to connect with our team. We’ll guide you through the setup process and help you integrate MeeriAI seamlessly into your systems.",
        },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="MeeriAI-main">
      <Header />
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Unlock the Future of Security with MeeriAI</h1>
        <p>
          Welcome to <strong>MeeriAI</strong>—the most advanced Biometric Identity Verification <br/>solution powered by cutting-edge AI and NVIDIA DeepStream SDK.
        </p>
        
        <Link to="/contact"> {/* Use Link to navigate to Contact Us page */}
            <button className="cta-btn">Get Started Now</button>
        </Link>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <h3>Step1: Seamless Camera Setup</h3>
            <p>
              Open the camera and allow MeeriAI to capture your iris pattern.
            </p>
          </div>
          <div className="step">
            <h3>Step2: AI-Powered Identification</h3>
            <p>
              AI analyzes your iris scan in real-time using NVIDIA DeepStream SDK for fast and accurate identification.
            </p>
          </div>
          <div className="step">
            <h3>Step3: Real-Time Verification & Blockchain Security</h3>
            <p>
              Your identity is verified instantly with blockchain security to keep your data safe and private.
            </p>
          </div>
          <div className="step">
            <h3>Step4: Effortless User Experience</h3>
            <p>
              Enjoy smooth, error-free authentication that saves time and enhances security.
            </p>
          </div>
        </div>
      </section>

      <div className="iris-scanner">
        <h1>Biometric Identity Verification</h1>
        <div className="camera-container">
            <video ref={videoRef} autoPlay muted className="camera-feed" />
        </div>
        <button onClick={startCamera} className="btn">Start Camera</button>
        <button onClick={startScan} className="btn" disabled={loading}>
            {loading ? "Scanning..." : "Start Iris Scan"}
        </button>
        <div className="result">{result && <p>{result}</p>}</div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </button>
            {activeIndex === index && (
              <div className="faq-answer-new">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className=" cta-new">
            <h2>Ready to Experience the Future of Security?</h2>
            <p>
            Take control of your privacy and security with MeeriAI, powered by NVIDIA DeepStream SDK. Start your journey toward ultimate security today!
            </p>
            <Link to="/contact"> {/* Use Link to navigate to Contact Us page */}
                <button className="cta-btn-new">Contact us</button>
            </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MeeriAI;
