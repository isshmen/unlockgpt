import { Home, Info, Star, Contact, FileText } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

interface MainNavProps {
  onPageChange: (page: string) => void;
}

export function MainNav({ onPageChange }: MainNavProps) {
  return (
    <div className="fixed left-0 top-0 h-full w-[280px] bg-[#1e1e1e] border-r border-[#333] p-5">
      <div className="text-[#2196f3] text-2xl mb-5">▲</div>
      
      <NavigationMenu orientation="vertical" className="w-full">
        <NavigationMenuList className="flex-col items-start space-y-2 w-full">
          <NavigationMenuItem className="w-full">
            <button onClick={() => onPageChange('homepage')} className={navigationMenuTriggerStyle() + " w-full justify-start bg-[#252525] hover:bg-[#2a2a2a]"}>
              <Home className="mr-3 h-5 w-5" />
              Homepage
            </button>
          </NavigationMenuItem>

          <NavigationMenuItem className="w-full">
            <button onClick={() => onPageChange('about')} className={navigationMenuTriggerStyle() + " w-full justify-start bg-[#252525] hover:bg-[#2a2a2a]"}>
              <Info className="mr-3 h-5 w-5" />
              About
            </button>
          </NavigationMenuItem>

          <NavigationMenuItem className="w-full">
            <button onClick={() => onPageChange('review')} className={navigationMenuTriggerStyle() + " w-full justify-start bg-[#252525] hover:bg-[#2a2a2a]"}>
              <Star className="mr-3 h-5 w-5" />
              Review
            </button>
          </NavigationMenuItem>

          <NavigationMenuItem className="w-full">
            <button onClick={() => onPageChange('contact')} className={navigationMenuTriggerStyle() + " w-full justify-start bg-[#252525] hover:bg-[#2a2a2a]"}>
              <Contact className="mr-3 h-5 w-5" />
              Contact
            </button>
          </NavigationMenuItem>

          <NavigationMenuItem className="w-full">
            <button onClick={() => onPageChange('terms')} className={navigationMenuTriggerStyle() + " w-full justify-start bg-[#252525] hover:bg-[#2a2a2a]"}>
              <FileText className="mr-3 h-5 w-5" />
              Terms & Conditions
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}