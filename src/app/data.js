export const projectsData = [
    {
      id: 1,
      name: "E-Commerce Website",
      description: "E-Commerce Website using Microservices",
      date: "2024-07-10",
      demoLink: "https://github.com/ChellaVigneshKP/E-COMMERCE",
    },
    {
      id: 2,
      name: "Stock Prediction",
      description: "Stock Price Prediction with LSTM Models",
      date: "2024-06-20",
      demoLink: "https://github.com/ChellaVigneshKP/stock-prediction",
    },
    {
      id: 3,
      name: "Data Analysis using LLM",
      description: "Extraction and Analysis of data using LLM",
      date: "2024-06-10",
      demoLink: "https://github.com/ChellaVigneshKP/Data-Analysis-using-LLM",
    },
    {
      id: 4,
      name: "File Searching",
      description: "File Searching using Java Multithreading",
      date: "2022-12-30",
      demoLink: "https://github.com/ChellaVigneshKP/Java-FileSearching",
    },
    {
      id: 5,
      name: "Online Voting System",
      description: "Online Voting system using Block-chain technology",
      date: "2022-05-12",
      demoLink: "",
    },
  ];
  
  export const BtnList = [
    { label: "Home", link: "/", icon: "home", newTab: false },
    { label: "About", link: "/about", icon: "about", newTab: false },
    { label: "Experience Timeline", link: "/experience", icon: "experience", newTab: false },
    { label: "Projects", link: "/projects", icon: "projects", newTab: false },
    { label: "Contact", link: "/contact", icon: "contact", newTab: false },
    {
      label: "Github",
      link: "https://github.com/ChellaVigneshKP",
      icon: "github",
      newTab: true,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/chella-vignesh-k-p",
      icon: "linkedin",
      newTab: true,
    },
    {
      label: "X",
      link: "https://x.com/ChellaVignesh6",
      icon: "twitter",
      newTab: true,
    },
    {
      label: "Resume",
      link: "https://drive.google.com/file/d/1MkeXzejF1FdZWU5ghiZMshKEyrfL810S/view?usp=sharing",
      icon: "resume",
      newTab: true,
    },
  ];


  export const timelineElements=[
    {
      key: 1,
      title: "HCL Technologies, Chennai",
      location: "Senior Software Engineer",
      logo: "background/Hcl.jpg",
      description: "Developing and maintaining high-performance Java-based backend systems and microservices. Utilizing Docker for containerization, Kubernetes for orchestration, and Jenkins for continuous integration and delivery.",
      date: "Sep 2022 - present",
      icon: "work",
      more: true,
      clients: [
        {
          clientName: "Cisco",
          clientLogo: "background/cisco.jpg",
          projects: [
            {
              title: "Cisco CloudCenter Suite",
              duration: "Dec 2022 - Jan 2024",
              description: "Worked on a cloud-based virtualization and monitoring software project, utilizing Java for backend development. Leveraged Docker for containerization and Kubernetes for orchestration to manage cloud resources efficiently. Developed robust microservices to facilitate seamless cloud operations and automation. Played a key role in optimizing resource utilization and reducing operational costs through effective cloud management strategies."
            },
            {
              title: "Sora",
              duration: "Jan 2024 - Jul 2024",
              description: "Worked on a Java-based project focused on developing a hardware bug tracking tool. Utilized Oracle Database for efficient data management and storage solutions."
            },
            {
              title: "Prime Infrastructure",
              duration: "Aug 2024 - Till",
              description: "Worked on a Java-based project aimed at monitoring networking devices."
            },
          ]
        },
      ]
    },
    {
      key: 2,
      title: "IIT Jodhpur, Rajasthan",
      location: "Postgraduate Dipoma in Data Science",
      logo:"background/IITJ.png",
      description:"Pursuing a comprehensive curriculum that covers statistical analysis, machine learning, data mining, and big data technologies. Gaining hands-on experience with data manipulation, visualization, and predictive modeling using Python. Collaborating on real-world projects to apply data science techniques for solving complex problems.",
      date: "Jan 2024 - Jan 2025 (Expected)",
      icon: "school",
    },
    {
      key: 3,
      title: "St. Xavier's Catholic College of Engineering, Nagercoil",
      location: "B.E. Computer Science and Engineering",
      logo:"background/SXCCE.png",
      description:"Developed a strong foundation in computer science principles and practices, including algorithms, data structures, and software engineering. Participated in various projects that involved coding, testing, and debugging software applications. Gained hands-on experience in programming languages such as Java and C, as well as database management systems. As CUO in NCC, demonstrated exceptional leadership skills and achieved an A grade in the C certificate exam.",
      buttonText: "AWS Academy",
      buttonUrl: "https://www.credly.com/badges/9f8d1e44-fb94-47e7-b57c-424d6475a907/linked_in_profile",
      date: "September 2011 - June 2013",
      icon: "school",
      cgpa:"8.02"
    },
    {
      key: 4,
      title: "SRKBV Matric Hr Sec School, Kulasekharam",
      location: "HSC (Tamil Nadu State Board)",
      logo:"background/SRKBV.png",
      description:
      "Studied under the Tamil Nadu State Board curriculum, achieving excellent results. Explored courses in bio-sciences, fostering a strong foundation in academic disciplines.",
      date: "September 2011",
      icon: "school",
      percentage:"84"
    },
    {
      key: 5,
      title: "SRKBV Matric Hr Sec School, Kulasekharam",
      location: "SSLC (Tamil Nadu State Board)",
      logo:"background/SRKBV.png",
      description:
        "Completed secondary education under the Tamil Nadu State Board, excelling in academic subjects and achieving notable success.",
      date: "2007 - 2011",
      icon: "school",
      percentage:"97"
    },
  ];  
  