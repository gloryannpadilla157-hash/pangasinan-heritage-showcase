interface NavigationItemProps {
  label: string;
  href: string;
}

export default function NavigationItem({
  label,
  href,
}: NavigationItemProps) {
  return (
    <a
      href={href}
      className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-teal-50 hover:text-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600"
    >
      {label}
    </a>
  );
}