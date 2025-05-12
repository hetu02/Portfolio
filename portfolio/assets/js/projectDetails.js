// JavaScript to load project details based on the URL parameter
document.addEventListener("DOMContentLoaded", function () {
  // Get the project ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id");

  if (projectId) {
    loadProjectDetails(projectId);
  }
});

function loadProjectDetails(projectId) {
  // Define the project details for each project
  const projectData = {
    derivedged: {
      title: "Derivedged website",
      description:
        "Developed a real-time market sentiment portal using SvelteKit, FastAPI, and PostgreSQL. Implemented server-sent events for low-latency updates and deployed on Fly.io and DigitalOcean, delivering scalable, up-to-date analytics.",
      mainImage: "assets/images/portfolio/derivedged.jpg",
      challengeImage: "assets/images/gallery/cha11.jpg",
      challengeTitle: "The Challenge",
      challengeDescription:
        "⚙️ Traditional stock market tools often struggle with delayed data, poor UI responsiveness, and limited scalability, making it difficult for users to act on fast-changing market sentiment.",
      challengePoints: [
        "Need for real-time sentiment updates.",
        "Lack of intuitive and lightweight interfaces.",
        "Complex, resource-heavy deployments not ideal for scaling.",
      ],
      solutionImage: "assets/images/gallery/cha22.jpg",
      solutionTitle: "The Solution",
      solutionDescription:
        "🚀 Built a high-performance market sentiment portal using SvelteKit for a sleek frontend, FastAPI for efficient backend handling, and PostgreSQL for robust data storage.",
      solutionPoints: [
        "Implemented Server-Sent Events (SSE) for ultra-low latency updates 📡.",
        "Designed a responsive, minimalist UI for fast market insights 📊.",
        "Deployed on Fly.io and DigitalOcean for flexible scaling and reliability ☁️.",
      ],
      resultImage: "assets/images/gallery/cha33.jpg",
      resultTitle: "Project Result",
      resultDescription:
        "🌟 Delivered a blazing-fast, scalable platform with real-time analytics—empowering users to make timely, data-driven market decisions.",
      resultPoints: [
        "<strong>90% faster update latency</strong> compared to traditional polling-based tools ⚡",
        "<strong>High user engagement</strong> due to intuitive design and responsive UX 📈",
        "<strong>Scalable deployment</strong> architecture ready for production traffic 🌍",
      ],
    },
    // "aroha-agency": {
    //   title: "Aroha Agency Website",
    //   description:
    //     "Created a modern, responsive agency website with dynamic content management and smooth animations using React, Tailwind CSS, and Strapi CMS.",
    //   mainImage: "assets/images/portfolio/derivedged.jpg",
    //   challengeImage: "assets/images/gallery/cha1.png",
    //   challengeTitle: "The Challenge",
    //   challengeDescription:
    //     "⚙️ The agency needed a flexible, distinctive web presence that would showcase their creative work while providing easy content updates.",
    //   challengePoints: [
    //     "Creating a visually impressive yet performant website.",
    //     "Building an intuitive content management system.",
    //     "Ensuring responsive design across all devices.",
    //   ],
    //   solutionImage: "assets/images/gallery/cha2.png",
    //   solutionTitle: "The Solution",
    //   solutionDescription:
    //     "🚀 Developed a dynamic React-based frontend with Tailwind CSS for styling and integrated Strapi headless CMS for content management.",
    //   solutionPoints: [
    //     "Implemented smooth scroll animations and transitions for engaging UX 🎨.",
    //     "Created a custom admin dashboard for easy content updates 🔄.",
    //     "Optimized assets and code for fast loading on all devices 📱.",
    //   ],
    //   resultImage: "assets/images/gallery/cha3.png",
    //   resultTitle: "Project Result",
    //   resultDescription:
    //     "🌟 Delivered a stunning website that effectively showcases the agency's work while providing them complete control over their content.",
    //   resultPoints: [
    //     "<strong>40% increase in engagement</strong> with portfolio items ⚡",
    //     "<strong>75% reduction</strong> in content update time compared to previous system 📈",
    //     "<strong>99/100 PageSpeed score</strong> on mobile and desktop 🚀",
    //   ],
    // },
    onlySpell: {
      title: "OnlySpell Website",
      description:
        "I designed a *Next.js-based platform that offers a **magic-inspired branding experience* for businesses, helping them craft their identity and attract the right audience through stunning visuals and deep audience analysis. Our goal is to create a *masterpiece brand* for each client that resonates with their audience and positions them as industry authorities. Whether you're already successful or striving for more, our team of design wizards blends creative strategies with *target audience insights*, unlocking your brand's potential and ensuring your business stands out and succeeds on a larger scale.  ",
      mainImage: "assets/images/portfolio/onlyspell-logo.webp",
      challengeImage: "assets/images/gallery/cha44.jpg",
      challengeTitle: "The Challenge",
      challengeDescription:
        "🎭 Many businesses struggle to define a compelling brand identity that truly resonates with their audience. Generic visuals, unclear messaging, and lack of audience insight often lead to weak market positioning.",
      challengePoints: [
        "Brands lacked emotional connection and differentiation in a crowded market 🎯",
        "Visuals and messaging were often disconnected from audience expectations 🎨",
        "No centralized, intelligent system to align branding with strategy and audience psychology 🧠",
      ],
      solutionImage: "assets/images/gallery/cha55.jpg",
      solutionTitle: "The Solution",
      solutionDescription:
        "✨ Developed a Next.js-powered platform that delivers a magic-inspired branding experience tailored to each business’s audience and mission.",
      solutionPoints: [
        "Crafted immersive UI/UX to capture users' imagination and trust 🧙‍♂️",
        "Integrated audience analysis tools to guide brand voice, visuals, and positioning 📊",
        "Enabled custom branding journeys that blend creativity with strategy 🎨🧩",
        "Built with Next.js for speed, scalability, and seamless performance ⚡",
      ],
      resultImage: "assets/images/gallery/cha66.jpg",
      resultTitle: "Project Result",
      resultDescription:
        "🌟 Empowered businesses to transform into unforgettable brands that inspire, connect, and convert.",
      resultPoints: [
        "<strong>Increased audience engagement</strong> through emotionally resonant branding 💡",
        "<strong>Boosted client satisfaction</strong> with tailored brand strategies that delivered real impact 📈",
        "<strong>Positioned clients as industry authorities</strong> through standout visual identities and messaging 👑",
      ],
    },
    tktby: {
      title: "Tktby – Ticket Booking Platform",
      description:
        "Redesigned a complex enterprise dashboard with a focus on user experience, accessibility, and data visualization using Figma and React.",
      mainImage: "assets/images/portfolio/tktby.png",
      challengeImage: "assets/images/gallery/cha444.jpg",
      challengeTitle: "The Challenge",
      challengeDescription:
        "⚙️ Traditional ticket booking systems often face limitations such as poor mobile responsiveness, limited real-time features, and high infrastructure costs, making it difficult to provide a smooth and scalable booking experience.",
      challengePoints: [
        "Lack of real-time user authentication and ticket confirmation.",
        "Limited flexibility in handling different types of APIs (REST/GraphQL).",
        "Inefficient state management and performance bottlenecks on high traffic.",
      ],
      solutionImage: "assets/images/gallery/cha555.jpg",
      solutionTitle: "The Solution",
      solutionDescription:
        "🚀 To solve these problems, we built Tktby, a modern ticket booking platform using scalable and high-performance technologies.",
      solutionPoints: [
        "Integrated Twilio OTP verification for secure user sign-up and login. 🧩.",
        "Implemented both REST and GraphQL APIs in Node.js for efficient data flow.📊.",
        "Used ShadCN UI, Redux, and TanStack to create fast, responsive interfaces with optimized state handling. ♿.",
      ],
      resultImage: "assets/images/gallery/cha666.jpg",
      resultTitle: "Project Result",
      resultDescription:
        "🌟 By leveraging modern technologies, we delivered Tktby, a high-performance, scalable ticket booking platform tailored for seamless user experience and operational efficiency.",
      resultPoints: [
        "Improved booking speed and reduced load times by 40%. ⏱️",
        "Increased user retention with a mobile-first, intuitive UI. 📈",
        "Enabled seamless scaling with AWS, handling up to 10k+ concurrent bookings. 🏛️",
      ],
    },
    infiction: {
      title: "InFiction Web Platform",
      description:
        "Created an interactive timeline of design history with rich media integration using Vue.js and a custom CMS.",
      mainImage: "assets/images/portfolio/infiction.jpg",
      challengeImage: "assets/images/gallery/cha1.png",
      challengeTitle: "The Challenge",
      challengeDescription:
        "🎬 The film industry lacks a centralized, digital-first platform where writers can showcase scripts and producers can easily discover, review, and purchase them. Traditional workflows are slow, unstructured, and opaque.",
      challengePoints: [
        "Fragmented process for script submission and review 📝",
        "No transparent rating or feedback mechanism 🌐",
        "Payment and licensing workflows were manual and insecure 💳",
      ],
      solutionImage: "assets/images/gallery/cha2.png",
      solutionTitle: "The Solution",
      solutionDescription:
        "🛠️ Developed InFiction, a one-stop digital platform connecting writers and producers.",
      solutionPoints: [
        "Designed an intuitive UI/UX for seamless user journeys 🎨",
        "Built robust REST APIs for script uploads, reviews, and ratings 📡",
        "Integrated Stripe for secure, automated payments 💰Integrated Stripe for secure, automated payments 💰",
        "Deployed on AWS for performance and scalability ☁️",
      ],
      resultImage: "assets/images/gallery/cha3.png",
      resultTitle: "Project Result",
      resultDescription:
        "🌟 Enabled a vibrant script marketplace that streamlined collaboration between creatives and decision-makers.",
      resultPoints: [
        "<strong>50% reduction</strong> in submission-to-review turnaround time 📉",
        "<strong>Real-time feedback and rating system</strong> increased user trust ⭐",
        "<strong>Secure Stripe integration</strong> enabled frictionless transactions 💼",
      ],
    },
    stocksNewsletter: {
      title: "Stocks Newsletter Platform",
      description:
        "Developed a real-time stock tracking platform using Web Sockets for live market data. Designed interactive interfaces to display real-time quotes, industry-leading stock options, and performance insights with both numerical and visual feedback for portfolio management. ",
      mainImage: "assets/images/portfolio/stock.jpg",
      challengeImage: "assets/images/gallery/cha111.jpg",
      challengeTitle: "The Challenge",
      challengeDescription:
        "📉 Traditional stock tracking tools often suffer from delayed updates and static displays, making it difficult for investors to respond swiftly to market movements and manage their portfolios effectively..",
      challengePoints: [
        "Delayed or lagging stock data updates during critical market shifts 🕒",
        "Lack of interactive UI for monitoring live portfolio performance 📊",
        "Limited visualization tools for understanding trends and insights 📉",
      ],
      solutionImage: "assets/images/gallery/cha222.jpg",
      solutionTitle: "The Solution",
      solutionDescription:
        "⚙️ Built a real-time stock tracking platform leveraging WebSockets for ultra-fast market data streaming and dynamic user interaction.",
      solutionPoints: [
        "Integrated WebSockets to deliver live market quotes without refresh latency ⚡",
        "Designed interactive dashboards to visualize stock performance with charts and metrics 📈",
        "Added features for tracking industry-leading options and personalized portfolio management 🧠.",
      ],
      resultImage: "assets/images/gallery/cha333.jpg",
      resultTitle: "Project Result",
      resultDescription:
        "🌟 Delivered a seamless, data-driven experience that empowered users to make fast, informed financial decisions.",
      resultPoints: [
        "<strong>Real-time data updates</strong> improved user reaction speed by 80% 🔄",
        "<strong>Highly visual and intuitive UI</strong> enhanced portfolio engagement and decision confidence 💡",
        "<strong>Scalable foundation</strong> for integrating additional analytics and investment tools 📊",
      ],
    },
    "money-monday": {
      title: "Money Monday platform",
      description:
        "Designed the platform for Money Monday Dubai, a unique opportunity to promote your brand to Dubai’s top entrepreneurs, founders, and industry professionals. The platform allows businesses to showcase their projects at the exclusive event every Monday, helping them connect with influential figures in the finance and startup ecosystem. Through an intuitive interface and clean design, users can easily choose a monthly or yearly sponsorship plan that aligns with their brand’s goals, ensuring maximum exposure and impact.",
      mainImage: "assets/images/portfolio/money-monday-logo.png",
      challengeImage: "assets/images/gallery/cha77.jpg",
      challengeTitle: "The Challenge",
      challengeDescription:
        "🌍 Businesses seeking visibility in Dubai’s elite startup and finance circles lacked a streamlined way to promote themselves at high-impact events. The process of securing sponsorships and showcasing offerings was often outdated, unclear, or inaccessible.",
      challengePoints: [
        "No centralized platform to manage event sponsorship opportunities 🎤",
        "Difficult for brands to connect with the right audience of entrepreneurs and investors 📉",
        "Lack of clarity around pricing, exposure levels, and sponsorship plans 💼",
      ],
      solutionImage: "assets/images/gallery/cha88.jpg",
      solutionTitle: "The Solution",
      solutionDescription:
        "🛠️ Designed a modern, intuitive platform for Money Monday Dubai to streamline brand promotion and sponsorship access.",
      solutionPoints: [
        "Built a clean, responsive UI for easy navigation and engagement 🎨",
        "Integrated a sponsorship plan system (monthly & yearly) tailored to business needs 📦",
        "Highlighted project showcases and benefits to attract premium users 🌟",
        "Optimized the platform to ensure smooth experience for high-profile event partners 🔧",
      ],
      resultImage: "assets/images/gallery/cha99.jpg",
      resultTitle: "Project Result",
      resultDescription:
        "🌟 Enabled brands to seamlessly position themselves in front of Dubai’s most influential figures—maximizing exposure and ROI.",
      resultPoints: [
        "<strong>Streamlined sponsorship onboarding</strong> with improved UX and plan clarity 🚀",
        "<strong>Increased brand visibility</strong> through curated showcases at exclusive events 📣",
        "<strong>Enhanced engagement</strong> with the startup and finance ecosystem in Dubai 🤝",
      ],
    },
  };

  // Handle the default case (derivedged) or invalid project ID
  const project = projectData[projectId] || projectData["derivedged"];

  // Update the project details in the DOM
  document.querySelector(".project-details-head h2").textContent =
    project.title;
  document.querySelector(".project-details-head p").textContent =
    project.description;
  document.querySelector(".pro-detailsthumb img").src = project.mainImage;

  // Update challenge section
  const challengeSection = document.querySelectorAll(".challenge-content")[0];
  challengeSection.querySelector("h4").textContent = project.challengeTitle;
  challengeSection.querySelector("p").textContent =
    project.challengeDescription;
  const challengeList = challengeSection.querySelector("ol");
  updateList(challengeList, project.challengePoints);
  document.querySelectorAll(".challenge-thumb img")[0].src =
    project.challengeImage;

  // Update solution section
  const solutionSection = document.querySelectorAll(".challenge-content")[1];
  solutionSection.querySelector("h4").textContent = project.solutionTitle;
  solutionSection.querySelector("p").textContent = project.solutionDescription;
  const solutionList = solutionSection.querySelector("ol");
  updateList(solutionList, project.solutionPoints);
  document.querySelectorAll(".challenge-thumb img")[1].src =
    project.solutionImage;

  // Update result section
  const resultSection = document.querySelectorAll(".challenge-content")[2];
  resultSection.querySelector("h4").textContent = project.resultTitle;
  resultSection.querySelector("p").textContent = project.resultDescription;
  const resultList = resultSection.querySelector("ol");
  updateList(resultList, project.resultPoints);
  document.querySelectorAll(".challenge-thumb img")[2].src =
    project.resultImage;
}

function updateList(listElement, items) {
  // Clear existing list items
  listElement.innerHTML = "";

  // Add new list items
  items.forEach((item) => {
    const li = document.createElement("li");
    li.className = "n0-color fs-six fw_300 mb-3";
    li.innerHTML = item;
    listElement.appendChild(li);
  });
}
