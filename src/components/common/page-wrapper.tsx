"use client";

import { motion } from "framer-motion";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ opacity: 0, transition: { duration: 3 } }}
    >
      {children}
    </motion.div>
  </>
);
