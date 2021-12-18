import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-white">
      <h1>Login container</h1>

      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
        {/* Logo */}

        <Image
          className="rounded-full object-cover"
          src="https://avatars.githubusercontent.com/u/40515075?v=4"
          height={150}
          width={150}
        />

        {/* Login Button */}
        <button
          onClick={authenticate}
          className="bg-black rounded-lg p-3 font-bold animate-pulse"
        >
          Login to the METAVERSE
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://c4.wallpaperflare.com/wallpaper/15/678/498/purple-vaporwave-1980s-night-wallpaper-preview.jpg"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
