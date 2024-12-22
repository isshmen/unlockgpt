import { Home, Info, Star, Contact, FileText } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export function MainNav() {
  return (
    <div className="fixed left-0 top-0 h-full w-[280px] bg-[#1e1e1e] border-r border-[#333] p-5">
      <div className="text-[#2196f3] text-2xl mb-5">▲</div>
      
      <NavigationMenu orientation="vertical" className="w-full">
        <NavigationMenuList className="flex-col items-start space-y-2 w-full">
          <NavigationMenuItem className="w-full">
            <Link to="/" className={navigationMenuTriggerStyle() + " w-full justify-start bg-[#252525] hover:bg-[#2a2a2a]"}>
              <Home className="mr-3 h-5 w-5" />
              Homepage
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="w-full">
            <Link to="/about" className={navigationMenuTriggerStyle() + " w-full justify-start bg-[#252525] hover:bg-[#2a2a2a]"}>
              <Info className="mr-3 h-5 w-5" />
              About
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="w-full">
            <Link to="/review" className={navigationMenuTriggerStyle() + " w-full justify-start bg-[#252525] hover:bg-[#2a2a2a]"}>
              <Star className="mr-3 h-5 w-5" />
              Review
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="w-full">
            <Link to="/contact" className={navigationMenuTriggerStyle() + " w-full justify-start bg-[#252525] hover:bg-[#2a2a2a]"}>
              <Contact className="mr-3 h-5 w-5" />
              Contact
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className="w-full">
            <Link to="/terms" className={navigationMenuTriggerStyle() + " w-full justify-start bg-[#252525] hover:bg-[#2a2a2a]"}>
              <FileText className="mr-3 h-5 w-5" />
              Terms & Conditions
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}