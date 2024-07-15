"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const AcedemicLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "custom-bg p-2 rounded-xl flex items-center justify-center",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default AcedemicLayout;