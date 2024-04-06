export default async function Menu() {
  return (
    <ul className="flex items-center space-x-4">
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About Me</a>
      </li>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">Blogs</a>
      </li>
      <li>
        <a href="#" className="btn-download">
          Download CV
        </a>
      </li>
    </ul>
  );
}
