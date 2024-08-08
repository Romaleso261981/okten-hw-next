import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={s.wrapper}>
      <div className={s.copiring}>
        <p>© 2021 Next.js</p>
      </div>
      <nav className={s.navigation}>
        <ul>
          <li>
            <a href="https://nextjs.org/docs/getting-started">Documentation</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Our Team</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
