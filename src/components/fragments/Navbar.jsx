import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <nav className="flex flex-row justify-between items-center p-4">
      <div className="flex flex-row gap-4 items-center justify-center">
        <img
          src="https://dmuvf4m79e02w.cloudfront.net/files/ICON-Logo-Black.jpg"
          alt="Logo"
          width={64}
          height={64}
        />
        <Input placeholder="Search" type="search" />
      </div>
      <div className="flex flex-row gap-4">
        <button className="border border-red-500 hover:bg-red-700 text-red-500 font-bold py-2 px-4 rounded-lg" onClick={() => navigate('/login')}>
          Masuk
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg">
          Daftar
        </button>
      </div>
    </nav>
  );
}
