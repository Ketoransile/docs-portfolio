"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { MdOutlineEmail } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../components/ui/input";
import { Textarea } from "./ui/textarea";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa6";
import { toast } from "sonner";
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("message", values.message);
    formData.append("access_key", "ae571f37-8e03-4b62-a37a-c558f552db2e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    try {
      // Send the data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        // Show success toast
        toast.success(
          "Thank you! Your message has been sent successfully. I'll get back to you as soon as possible."
        );
        // Clear the form fields
        form.reset();
      } else {
        // Show error toast
        toast.error(  
          "Oops! Something went wrong. Please try again later or reach out directly."
        );
      }
    } catch (error) {
      // Show error toast
      console.log(error);
      toast.error(
        "Oops! Something went wrong. Please try again later or reach out directly."
      );
    }
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <label className="block mb-2 text-base font-semibold text-foreground">Email<span className="text-red-500">*</span></label>
                <FormControl>
                  <Input placeholder="Your email" {...field} className="w-full border border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <label className="block mb-2 text-base font-semibold text-foreground">Message<span className="text-red-500">*</span></label>
                <FormControl>
                  <Textarea placeholder="Type your message here." {...field} className="w-full border border-neutral-700" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3 rounded-lg transition-colors disabled:bg-slate-300"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
