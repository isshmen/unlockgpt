import { useState, useEffect } from "react";
import { ChatInterface } from "@/components/ChatInterface";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/MainNav";

const Index = () => {
  const [currentPage, setCurrentPage] = useState('homepage');
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      title: "Carrier Unlock",
      version: "v2.1",
      description: "Unlock your phone from any carrier worldwide. Works with all major carriers and phone models."
    },
    {
      title: "FRP Bypass",
      version: "v5.2",
      description: "Remove Factory Reset Protection (FRP) lock from your Android device quickly and securely."
    },
    {
      title: "iCloud Unlock",
      version: "v14.9",
      description: "Remove iCloud activation lock from your iOS device. Compatible with all iOS versions."
    },
    {
      title: "IMEI Blacklist",
      version: "v10.5",
      description: "Check and resolve IMEI blacklist status for any mobile device."
    },
    {
      title: "Unlock Passcode",
      version: "v16.5",
      description: "Remove screen lock, PIN, pattern, or password from your device safely."
    },
    {
      title: "Unlock Password",
      version: "v3.5",
      description: "Recover or bypass forgotten passwords for various device accounts and services."
    },
    {
      title: "Hard/Factory Reset",
      version: "v3.5",
      description: "Safely reset your device to factory settings without losing important data."
    },
    {
      title: "Recover Files",
      version: "v3.5",
      description: "Recover deleted photos, messages, contacts and other important files from your device."
    }
  ];

  const renderContent = () => {
    switch (currentPage) {
      case 'homepage':
        return (
          <>
            <h1 className="text-4xl font-bold text-center mb-2">UnlockGPT</h1>
            <p className="text-[#999] text-center mb-10">AI-Powered Unlocking Tool</p>
            
            <div className="bg-[#252525] p-8 rounded-xl max-w-3xl mx-auto mb-10 text-center">
              <p className="text-lg">
                Welcome to UnlockGPT tool. Please choose the unlock tool you need from the menu and follow instructions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-[#252525] p-6 rounded-xl transition-all duration-300 hover:bg-[#2a2a2a] hover:transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <div className="inline-block bg-[#1a1a1a] text-[#666] text-sm px-2 py-1 rounded mb-3">
                    {service.version}
                  </div>
                  <p className="text-[#999] text-sm mb-4">{service.description}</p>
                  <Button 
                    onClick={() => setSelectedService(service.title)}
                    className="w-full bg-[#2196f3] hover:bg-[#1976d2] text-white"
                  >
                    Access
                  </Button>
                </div>
              ))}
            </div>
          </>
        );
      case 'about':
        return (
          <>
            <h1 className="text-4xl font-bold text-center mb-2">About Us</h1>
            <div className="bg-[#252525] p-8 rounded-xl max-w-3xl mx-auto">
              <p className="text-lg">
                We are a team of experts dedicated to providing the best unlocking solutions for your mobile devices. 
                Our tools are designed to work efficiently and securely.
              </p>
            </div>
          </>
        );
      case 'review':
        return (
          <>
            <h1 className="text-4xl font-bold text-center mb-2">Reviews</h1>
            <div className="bg-[#252525] p-8 rounded-xl max-w-3xl mx-auto">
              <p className="text-lg mb-4">Here are some reviews from our users:</p>
              <ul className="space-y-2">
                <li>"Great service! My phone was unlocked in minutes." - John</li>
                <li>"Highly recommended for iCloud unlock." - Sarah</li>
              </ul>
            </div>
          </>
        );
      case 'contact':
        return (
          <>
            <h1 className="text-4xl font-bold text-center mb-2">Contact Us</h1>
            <div className="bg-[#252525] p-8 rounded-xl max-w-3xl mx-auto">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-2">Name</label>
                  <input type="text" className="w-full p-2 rounded bg-[#1a1a1a] border border-[#333]" />
                </div>
                <Button type="submit" className="w-full bg-[#2196f3] hover:bg-[#1976d2]">
                  Submit
                </Button>
              </form>
            </div>
          </>
        );
      case 'terms':
        return (
          <>
            <h1 className="text-4xl font-bold text-center mb-2">Terms & Conditions</h1>
            <div className="bg-[#252525] p-8 rounded-xl max-w-3xl mx-auto">
              <p className="text-lg">
                Please read our terms and conditions carefully before using our services.
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  // Show ChatInterface when a service is selected
  if (selectedService) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] text-white">
        <MainNav onPageChange={setCurrentPage} />
        <div className="ml-[280px] p-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">{selectedService} AI-Powered Tool</h2>
              <Button
                variant="ghost"
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-white"
              >
                Back to Services
              </Button>
            </div>
            <ChatInterface />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <MainNav onPageChange={setCurrentPage} />
      <div className="ml-[280px] p-10">
        {renderContent()}
      </div>
    </div>
  );
};

export default Index;