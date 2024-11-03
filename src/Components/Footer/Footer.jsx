const Footer = () => {
  return (
    <div>
          <footer className="footer bg-base-200  border-base-300 border-b  flex flex-col items-center">
       
           <div className="flex flex-col items-center justify-center">
           <h1 className="mt-5 text-5xl font-semibold ">Gadget Heaven</h1>
           <p className="mb-5 text-gray-600 text-lg">Leading the way in cutting-edge technology and innovation.</p>
           </div>
       
       
      </footer>
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    
    </div>
  );
};

export default Footer;
