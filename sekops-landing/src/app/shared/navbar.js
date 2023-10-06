import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="px-[100px] pt-[34px] flex items-center w-full absolute z-[100] top-0 left-0">
      <div className="flex-1">
        <Image src="/assets/logo.svg" alt="logo" width={145} height={36} />
      </div>
      <div className="flex-[0_0_550px] justify-center flex text-[1rem]">
        <ul className="flex items-center">
          <li className="pr-8">
            <a
              href="/"
              className="hover:text-blue-primary transition-all duration-150 ease-in-out"
            >
              Home
            </a>
          </li>
          <li className="pr-8">
            <a
              href="#why-sekops"
              className="hover:text-blue-primary transition-all duration-150 ease-in-out"
            >
              Why SekOps?
            </a>
          </li>
          <li className="pr-8">
            <a
              href="#capabilities"
              className="hover:text-blue-primary transition-all duration-150 ease-in-out"
            >
              Capabilities
            </a>
          </li>
          <li className="pr-8">
            <a
              href="#techs"
              className="hover:text-blue-primary transition-all duration-150 ease-in-out"
            >
              Technologies
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-1 flex justify-end">
        <button className="bg-blue-primary w-[150px] py-4 rounded">
          <span className="font-medium text-[15px] text-[#fff]">
            Book a demo
          </span>
        </button>
      </div>
    </nav>
  );
};
