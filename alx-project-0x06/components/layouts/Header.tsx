import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const Header: React.FC = () => {
  // Get the current pathname using the Next.js usePathname hook.
  const pathname = usePathname();
  // Access the count state from the Redux store.  This uses a selector to get the specific value.
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <header className="fixed w-full bg-white shadow-md">
      {/* Container for header content */}
      <div className="container mx-auto flex justify-between items-center py-6 px-4 md:px-8">
        {/* Brand/Logo - Links to homepage */}
        <Link href="/" className="text-3xl md:text-5xl font-bold text-gray-800 tracking-tight">
          Splash App
        </Link>

        {/* Call to action buttons */}
        <div className="flex gap-4">
          {!["/counter-app"].includes(pathname) ? (
            <>
            <Button buttonLabel="Sign In" buttonBackgroundColor="red" />
            <Button buttonLabel="Sign Up" buttonBackgroundColor="blue" />
            </>
          ) : (<p className="font-semibold text-lg"> Current count : {count}</p>)
          }
        </div>
      </div>
    </header>
  );
};

export default Header;