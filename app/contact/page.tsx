"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { motion } from "framer-motion";

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

const services = [
  {
    num: "01",
    title: "Web Development",
    href: "/web-development",
  },
  {
    num: "02",
    title: "Mobile App Development",
    href: "/mobile-development",
  },
  {
    num: "03",
    title: "System Administration",
    href: "/system-administration",
  },
  {
    num: "04",
    title: "Graphic Design",
    href: "/graphic-design",
  },
  {
    num: "05",
    title: "IT Support",
    href: "/it-support",
  },
];

const Contact = () => {
  const [state, handleSubmit] = useForm("xqazvrzy");
  const [selectedService, setSelectedService] = useState("");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

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
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[60%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
              method="POST"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                I'm excited to collaborate on your next project. Whether you
                need a full-stack developer, a graphic designer, or IT support,
                I'm here to help bring your vision to life. Let's create
                something amazing together!
              </p>
              {/* input  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstName" placeholder="First Name" />
                <Input type="text" name="lastName" placeholder="Last Name" />
                <Input type="email" name="email" placeholder="Email Address" />
                <Input type="text" name="phone" placeholder="Phone number" />
              </div>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              {/* select */}
              <Select
                onValueChange={(value) => setSelectedService(value)}
                name="service"
              >
                <SelectTrigger className="w-full animate-blink-border">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    {services.map((service) => (
                      <SelectItem key={service.num} value={service.title}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* hidden input for service */}
              <input type="hidden" name="service" value={selectedService} />
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <Button
                size="md"
                className="max-w-40"
                type="submit"
                disabled={state.submitting}
              >
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div
            className="flex-1 flex items-center xl:justify-end
          order-1 xl:order-none mb-8 xl:mb-0"
          >
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => (
                <li
                  className="flex items-center gap-4 p-4 bg-[#27272c] rounded-xl"
                  key={index}
                >
                  <span className="text-4xl text-accent">{item.icon}</span>
                  <div>
                    <h4 className="text-xl text-accent">{item.title}</h4>
                    <p className="text-white">{item.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
