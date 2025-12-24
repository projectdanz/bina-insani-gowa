import React from "react";
import { motion } from "framer-motion";

const SectionHeader = ({
  title,
  subtitle,
  light = false,
  align = "center",
}) => {
  return (
    <div
      className={`max-w-3xl mb-12 ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`inline-block px-4 py-1.5 rounded-full mb-4 text-xs font-bold uppercase tracking-widest ${
          light
            ? "bg-white/10 text-tertiary border border-white/20"
            : "bg-primary/10 text-primary"
        }`}
      >
        {subtitle}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-5xl font-black leading-tight ${
          light ? "text-white" : "text-primary-950"
        }`}
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default SectionHeader;
