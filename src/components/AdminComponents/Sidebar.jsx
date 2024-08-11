import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 md:pl-14 py-3 border border-black">
        <p>Image</p>
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
        <div className="w-[50%] sm:w-[80%] absolute right-0">
          <Link href={`/admin/AddProduct`} className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000">
            <p>Add Blogs</p>
          </Link>
          <Link href={`/admin/BlogList`} className="mt-4 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000">
            <p>Blog List</p>
          </Link>
          <Link href={`/admin/Subscription`} className="mt-4 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000">
            <p>Subscription</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
