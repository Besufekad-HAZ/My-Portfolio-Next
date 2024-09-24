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
  return <div>Contact Page</div>;
};

export default Contact;
