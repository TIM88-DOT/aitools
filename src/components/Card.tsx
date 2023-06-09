import { Tool } from "@prisma/client";

export default function Card({ data }: { data: Tool }) {
  return (
    <div className="w-80 h-[500px] rounded-lg mt-5 mb-14 border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <a href={data.website ?? "#"} rel="noopener noreferrer" target="_blank">
        <img className="rounded-t-lg max-h-72 w-[100%]" src={data.image ?? ""} alt={data.name ?? 'Ai tool'}/>
      </a>
      <div className="p-4">
        <a href={data.website ?? "#"}>
          <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            {data.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data.desc}
        </p>
        <a
          href={data.website ?? "#"}
          target="_blank"
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Visit
          <svg
            aria-hidden="true"
            className="-mr-1 ml-2 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
