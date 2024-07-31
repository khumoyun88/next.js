import Link from "next/link";

export default function Navigation({ navLinks }) {
  return (
    <nav>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            {/* Ensure link.href and link.title are defined */}
            <Link href={link.href || "#"}>{link.title || "Untitled"}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
