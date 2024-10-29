"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { FaTelegram, FaPhone } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600"
          >
            Quick Contacts
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center space-x-4"
          >
            <Button variant="ghost" size="icon" asChild>
            <a
              href="tel:+251942421291" 
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaPhone className="h-5 w-5" />
            </a>
          </Button>

            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/elias-balude-9a85122b4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://t.me/ebelia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors"
              >
                <FaTelegram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="mailto:your.elijahbag456@gmail.com"
                className="text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} Elias Balude. All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}