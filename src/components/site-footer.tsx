export function SiteFooter() {
  return (
    <footer className="bg-[#e8e8e8] px-4 py-8 text-center text-xs text-[#777]">
      CJP &copy; {new Date().getFullYear()}, Developed by{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://htr.design"
      >
        HTR Design
      </a>
    </footer>
  )
}
