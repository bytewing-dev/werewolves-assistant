import { HomeIcon, BookIcon, UserIcon, CogIcon } from "lucide-react";

export default function Navbar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 w-full bg-stone-100 py-4 flex justify-around items-center z-50">
            <button className="text-stone-800">
                <HomeIcon size={24} />
            </button>
            <button className="text-stone-800">
                <BookIcon size={24} />
            </button>
            <button className="text-stone-800">
                <UserIcon size={24} />
            </button>
            <button className="text-stone-800">
                <CogIcon size={24} />
            </button>
        </div>
    );
};