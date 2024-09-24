"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Importing from the UI component
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    content: "(+251) 923027215",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    content: "besurye@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    content: "02 Kotebe, Addis Ababa Ethiopia",
  },
];

import { motion } from "framer-motion";
const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div>
          {/* form */}
          <form
            className="w-full flex flex-col gap-4
          lg:flex-row"
          >
            <Input name="name" placeholder="Name" />
            <Input name="email" type="email" placeholder="Email" />
            <Input name="subject" placeholder="Subject" />
            <Textarea name="message" placeholder="Message" />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
