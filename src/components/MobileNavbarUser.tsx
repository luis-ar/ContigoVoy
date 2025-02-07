import { Button } from "@/components/ui/button"; 
import { Icons } from "@/icons";
import Link from "next/link";
import Image from "next/image";

export function MobileNavbar({ navItems }: any) {
    return (
     <div className= "pt-7">
      <div className="rounded-2xl flex flex-col items-center bg-background w-full h-full p-4">
        {/* Logo reducido */}
        <div className="flex justify-center mb-4">
          <Link href="/">
            <Image src={"/LOGO.png"} alt="logo" width={80} height={60} />
          </Link>
        </div>
  
        {/* Menú de navegación solo con iconos */}
        <div className="flex flex-col items-center gap-4 w-full">
          {navItems.map((navItem: any, idx: number) => (
            <div className="w-full flex justify-center" key={idx}>
              <Link href={navItem.link}>
                <Button
                  className="w-full flex justify-center items-center bg-transparent text-[#634AE2] text-2xl border-none hover:bg-[#634AE2] hover:text-white transition-colors duration-300 rounded-full p-3"
                >
                  <span
                    className="text-xl"
                    dangerouslySetInnerHTML={{
                      __html: navItem.icono.replace(
                        /<svg /,
                        '<svg fill="currentColor" '
                      ),
                    }}
                    
                  />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      </div> 
    );
  }
  