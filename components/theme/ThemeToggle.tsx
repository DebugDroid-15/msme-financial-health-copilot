"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle(){

  const {theme,setTheme}=useTheme();

  const [mounted,setMounted]=useState(false);

  useEffect(()=>{

    setMounted(true);

  },[]);

  if(!mounted)return null;

  const dark=theme==="dark";

  return(

    <button

      onClick={()=>setTheme(dark?"light":"dark")}

      className="relative flex items-center w-16 h-9 rounded-full bg-slate-200 dark:bg-slate-700 transition-all duration-300"

    >

      <Sun

        size={15}

        className="absolute left-2 text-yellow-500"

      />

      <Moon

        size={15}

        className="absolute right-2 text-slate-200"

      />

      <div

        className={`
          absolute
          top-1
          h-7
          w-7
          rounded-full
          bg-white
          dark:bg-[#0F172A]
          shadow-lg
          transition-all
          duration-300
          flex
          items-center
          justify-center
          ${dark?"translate-x-8":"translate-x-1"}
        `}
      >

        {dark?

          <Moon

            size={14}

            className="text-blue-300"

          />

          :

          <Sun

            size={14}

            className="text-yellow-500"

          />

        }

      </div>

    </button>

  );

}