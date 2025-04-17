type LinkObject = { label: string; href: string };

const links: LinkObject[] = [
  { label: "O mnie", href: "#landing" },
  { label: "Projekty", href: "#projects" },
  { label: "Wiedza", href: "#knowledge" },
  { label: "Kontakt", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-end gap-3 px-5 py-3">
      {links.map((link) => {
        return (
          <a
            key={link.href}
            href={link.href}
            className="text-black font-medium text-2xl hover:text-violet-700 duration-100 hover:translate-y-1 text-shadow-lg"
          >
            {link.label}
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;
