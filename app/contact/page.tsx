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
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaCheckCircle,
} from "react-icons/fa";
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
  { num: "01", title: "Web Development" },
  { num: "02", title: "Mobile App Development" },
  { num: "03", title: "System Administration" },
  { num: "04", title: "Graphic Design" },
  { num: "05", title: "IT Support" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Contact = () => {
  const [state, handleSubmit] = useForm("xqazvrzy");
  const [selectedService, setSelectedService] = useState("");

  if (state.succeeded) {
    return (
      <section className="min-h-screen pt-24 xl:pt-32 pb-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center card max-w-md mx-auto"
        >
          <FaCheckCircle className="text-6xl text-accent mx-auto mb-6" />
          <h2 className="h3 text-white mb-4">Thank You!</h2>
          <p className="text-white/60">
            Your message has been sent successfully. I'll get back to you soon!
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 xl:pt-32 pb-12"
    >
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-accent text-sm font-medium tracking-wider uppercase">
            Get In Touch
          </span>
          <h1 className="h2 mt-2">
            Let's <span className="text-gradient">Work Together</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            I'm excited to collaborate on your next project. Whether you need a
            full-stack developer, a graphic designer, or IT support, I'm here to
            help.
          </p>
        </motion.div>

        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 order-2 xl:order-none"
          >
            <form
              className="card space-y-6"
              onSubmit={handleSubmit}
              method="POST"
            >
              {/* Name inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  required
                />
              </div>

              {/* Contact inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
                <Input type="tel" name="phone" placeholder="Phone Number" />
              </div>

              {/* Service select */}
              <Select
                onValueChange={(value) => setSelectedService(value)}
                name="service"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Services</SelectLabel>
                    {services.map((service) => (
                      <SelectItem key={service.num} value={service.title}>
                        {service.title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <input type="hidden" name="service" value={selectedService} />

              {/* Message */}
              <div>
                <Textarea
                  className="min-h-[180px]"
                  placeholder="Tell me about your project..."
                  name="message"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-400 text-sm mt-1"
                />
              </div>

              {/* Submit */}
              <Button
                size="lg"
                type="submit"
                disabled={state.submitting}
                className="w-full sm:w-auto"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="xl:w-[380px] order-1 xl:order-none"
          >
            <div className="space-y-4">
              {info.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card flex items-center gap-5 group"
                >
                  <div
                    className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20
                    flex items-center justify-center
                    group-hover:bg-accent group-hover:border-accent transition-all duration-300"
                  >
                    <span className="text-2xl text-accent group-hover:text-primary transition-colors">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-accent font-medium">{item.title}</h4>
                    <p className="text-white/80">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional info */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 rounded-xl border border-accent/20 bg-accent/5"
            >
              <h4 className="text-accent font-semibold mb-2">
                Available for Freelance
              </h4>
              <p className="text-white/60 text-sm">
                I'm currently accepting new projects. Let's discuss how I can
                help bring your ideas to life.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
