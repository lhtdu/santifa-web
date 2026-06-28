import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/app/config/links";

export const FOOTER_CONTACT = [
  { icon: Phone, text: COMPANY_INFO.phoneDisplay },
  { icon: Mail, text: COMPANY_INFO.email },
  { icon: MapPin, text: COMPANY_INFO.address.full },
  { icon: Clock, text: COMPANY_INFO.hours },
];
