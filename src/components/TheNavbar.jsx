import { Link } from "react-router-dom";

const TheNavbar = () => {
  return (
    <div className="bg-dark-brown text-cream-white flex justify-between py-2 px-52 ">
      {/* <h1 className="text-xl font-bold">Kishore-Blogs</h1> */}
      <ul className="flex space-x-10 ">
        <li className=" cursor-pointer hover:text-cream-brown">
          <Link to={"/"}>Home</Link>
        </li>
        <li className=" cursor-pointer hover:text-cream-brown">
          <Link to={"/about"}>About</Link>
        </li>
        <li className=" cursor-pointer hover:text-cream-brown">
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
      <ul className="flex space-x-5 items-center">
        <li>
          <Link to={"www.facebook.com"} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              className=" cursor-pointer hover:text-cream-brown"
            >
              <path
                fill="currentColor"
                d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link to={""} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
              className=" cursor-pointer hover:text-cream-brown"
            >
              <path
                fill="currentColor"
                d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34zm0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32"
              />
              <path
                fill="currentColor"
                d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28M256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link to={""} target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16"
              className="cursor-pointer hover:text-cream-brown"
            >
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TheNavbar;
