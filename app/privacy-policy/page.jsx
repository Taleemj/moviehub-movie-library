import styles from "./policy.module.scss";

const Page = () => {
  return (
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p>Last updated: October 7, 2023</p>

      <div className={styles.thepolicy}>
        <h1>Personal Data</h1>
        <p>
          MovieHub2Day does <u>NOT</u> collect or ask for any of your personal
          information. It is free to use with no strings attached. So no signups
          or logins required.
        </p>

        <h1>Usage Data</h1>
        <p>
          Usage Data is collected automatically when using the Service. Usage
          Data may include information such as your browser type, browser
          version, the pages of our Service that You visit, operating system,
          the time and date of Your visit, the time spent on those pages, unique
          device identifiers and other diagnostic data. These are automatically
          collect by the use of analytics tools such as google analytics.
        </p>
        <p>This information helps us improve our overall service provision.</p>
      </div>
    </div>
  );
};

export default Page;
