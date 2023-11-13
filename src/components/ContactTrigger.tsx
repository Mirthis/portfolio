"use client";

import { showContactModal } from "@/lib/state";
import { useAtom } from "jotai";

const ContactTrigger = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useAtom(showContactModal);
  return <div onClick={() => setOpen(!open)}>{children}</div>;
};

export default ContactTrigger;
