const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
        <p className="text-xs">© 2025 Csaba.Földesi. All rights reserved.</p>
        <nav className="sm:ml-auto gap-4 sm:gap-6 hidden">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
