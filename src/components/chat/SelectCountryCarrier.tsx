import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { carriersByCountry } from "@/data/carrierData";

interface SelectCountryCarrierProps {
  selectedCountry: string;
  selectedCarrier: string;
  onCountryChange: (value: string) => void;
  onCarrierChange: (value: string) => void;
}

export const SelectCountryCarrier = ({
  selectedCountry,
  selectedCarrier,
  onCountryChange,
  onCarrierChange,
}: SelectCountryCarrierProps) => {
  return (
    <div className="space-y-4 w-full">
      <Select onValueChange={onCountryChange} value={selectedCountry}>
        <SelectTrigger className="w-full bg-[#222222] border-[#333333] text-white">
          <SelectValue placeholder="Select Country" />
        </SelectTrigger>
        <SelectContent className="bg-[#222222] border-[#333333] text-white">
          {Object.keys(carriersByCountry).map((country) => (
            <SelectItem key={country} value={country} className="hover:bg-[#333333]">
              {country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select 
        onValueChange={onCarrierChange} 
        value={selectedCarrier}
        disabled={!selectedCountry}
      >
        <SelectTrigger className="w-full bg-[#222222] border-[#333333] text-white">
          <SelectValue placeholder={selectedCountry ? "Select Carrier" : "Select Country First"} />
        </SelectTrigger>
        <SelectContent className="bg-[#222222] border-[#333333] text-white">
          {selectedCountry ? 
            carriersByCountry[selectedCountry as keyof typeof carriersByCountry].map((carrier) => (
              <SelectItem key={carrier} value={carrier} className="hover:bg-[#333333]">
                {carrier}
              </SelectItem>
            ))
            :
            <SelectItem value="" disabled>Please select a country first</SelectItem>
          }
        </SelectContent>
      </Select>
    </div>
  );
};