function DetailIcons({ svg }) {
   return (
      <li className="hover:text-indigo-500 transition-colors cursor-pointer">
         <svg className="size-5">
            <use href={`#${svg}`}></use>
         </svg>
      </li>
   );
}

export default DetailIcons;
