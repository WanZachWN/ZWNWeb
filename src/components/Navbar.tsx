export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
    <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
  <ul className="flex space-x-4">
  <li><a href="/" className="text-white">Home</a></li>
  <li><a href="/projects" className="text-white">Projects</a></li>
  <li><a href="/contact" className="text-white">Contact</a></li>
  </ul>
  </div>
  </nav>
);
}
