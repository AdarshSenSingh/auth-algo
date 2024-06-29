/* eslint-disable react/no-unescaped-entities */
const Services = () => {
  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: '0 auto',
      padding: '20px',
      maxWidth: '800px',
      lineHeight: '1.6',
    },
    heading: {
      color: '#4CAF50',
      borderBottom: '2px solid #4CAF50',
      paddingBottom: '10px',
      marginBottom: '20px',
    },
    section: {
      marginBottom: '30px',
    },
    subHeading: {
      color: 'white',
      fontSize: '1.5em',
      marginBottom: '10px',
    },
    paragraph: {
      color: '#555',
      marginBottom: '10px',
    },
    list: {
      color: '#555',
      paddingLeft: '20px',
    },
    listItem: {
      marginBottom: '5px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Learn More About Coding</h1>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Why Learn to Code?</h2>
        <p style={styles.paragraph}>
          Coding is an essential skill in today's digital age. Whether you're looking to build your own website, develop a mobile app, automate tasks, or pursue a career in tech, coding can open up a world of opportunities. Learning to code enhances problem-solving skills, logical thinking, and creativity.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Beginner-Friendly Resources</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><b>FreeCodeCamp:</b> Offers free courses on HTML, CSS, JavaScript, and more, complete with hands-on projects.</li>
          <li style={styles.listItem}><b>Codecademy:</b> Interactive coding tutorials in various programming languages, suitable for beginners.</li>
          <li style={styles.listItem}><b>Khan Academy:</b> Provides basic programming lessons in a fun, interactive way.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Advanced Topics and Specializations</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><b>Data Structures and Algorithms:</b> Mastering these concepts is crucial for optimizing code and performing well in technical interviews. Resources like LeetCode and HackerRank are great for practice.</li>
          <li style={styles.listItem}><b>Web Development:</b> Learn about front-end (HTML, CSS, JavaScript) and back-end (Node.js, Python, Ruby) development. Websites like MDN Web Docs and W3Schools offer comprehensive guides.</li>
          <li style={styles.listItem}><b>Machine Learning and AI:</b> Dive into the world of artificial intelligence with courses from Coursera or edX. Python libraries like TensorFlow and PyTorch are popular in this field.</li>
          <li style={styles.listItem}><b>Mobile Development:</b> Create mobile apps with platforms like Flutter, React Native, or Swift. Check out tutorials on YouTube or courses on Udemy.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Best Practices and Tools</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><b>Version Control:</b> Learn how to use Git and GitHub for managing code versions and collaborating with others.</li>
          <li style={styles.listItem}><b>Code Reviews and Testing:</b> Understand the importance of code reviews and automated testing to ensure code quality.</li>
          <li style={styles.listItem}><b>Development Environments:</b> Get familiar with IDEs like Visual Studio Code, PyCharm, or IntelliJ IDEA, and tools like Docker for containerization.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Community and Collaboration</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><b>Join Coding Communities:</b> Engage with fellow learners and professionals on platforms like Stack Overflow, Reddit, and GitHub.</li>
          <li style={styles.listItem}><b>Hackathons and Competitions:</b> Participate in coding challenges and hackathons to test your skills and learn from others. Websites like Devpost and Kaggle host regular events.</li>
          <li style={styles.listItem}><b>Open Source Contributions:</b> Contribute to open-source projects to gain real-world experience and collaborate with experienced developers.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Stay Updated</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><b>Blogs and Newsletters:</b> Follow popular coding blogs like Medium’s programming section, Smashing Magazine, or CSS-Tricks for the latest trends and tutorials.</li>
          <li style={styles.listItem}><b>Podcasts and YouTube Channels:</b> Subscribe to tech podcasts and YouTube channels such as "Syntax" or "Traversy Media" to stay informed and inspired.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subHeading}>Getting Started</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><b>Set Clear Goals:</b> Define what you want to achieve with coding. Whether it's building a personal project or landing a job in tech, having clear goals will keep you motivated.</li>
          <li style={styles.listItem}><b>Practice Regularly:</b> Consistency is key. Dedicate a specific amount of time each day or week to practice coding.</li>
        
          <li style={styles.listItem}><b>Seek Feedback:</b> Don't hesitate to ask for help or feedback from peers or mentors. Constructive criticism is invaluable for improvement.</li>
        </ul>
      </section>
    </div>
  );
}

export default Services;
