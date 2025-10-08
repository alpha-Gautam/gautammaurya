import React from "react";

function LinkIcons() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-external-link h-5 w-5 text-blue-400
group-hover: text-primary transition-colors"
      aria-hidden="true"
    >
      <path d="M15 3h6v6"></path>
      <path d="M10 14 21 3"></path>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    </svg>
  );
}

export default LinkIcons;

export function CollegeIcons() {
  return (
    <svg
      width="50px"
      height="50px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:scale-120 transition-all"
    >
      <path d="M17.673 5.606a3326.02 3326.02 0 0 1-5.671-2.674L.138 8.524l2.03.98L2 9.531V20h1v-9.626l.72-.124.28.135v5.288c0 .914 5.206 3.533 6.249 4.049a3.89 3.89 0 0 0 3.48-.026C20 16.486 20 15.895 20 15.673v-5.288l3.854-1.857s-3.8-1.801-6.181-2.922zM19 15.504a51.526 51.526 0 0 1-5.726 3.302 2.884 2.884 0 0 1-2.582.02A40.184 40.184 0 0 1 5 15.521v-4.655l7 3.373 7-3.373zm-7-2.373L5.416 9.958l6.469-1.115-.17-.987-7.85 1.354-1.403-.676 9.537-4.495c.825.393 8.523 4.014 9.542 4.494z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  );
}
