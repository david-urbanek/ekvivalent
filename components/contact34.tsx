"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, LoaderIcon } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeInText } from "@/components/fade-in-text";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  name: z.string().min(1, "Jméno je povinné"),
  email: z
    .string()
    .min(1, "E-mail je povinný")
    .email("Zadejte platný e-mail"),
  message: z.string().min(1, "Zpráva je povinná"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface Contact34Props {
  title?: string;
  tagline?: string;
  email?: string;
  phone?: string;
  address?: string;
  image?: string;
  className?: string;
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

const Contact34 = ({
  title = "Pojďme společně zvýšit hodnotu vaší firmy",
  tagline = "Kontakt",
  email = "info@ekvivalent.cz",
  phone = "+420 603 488 705",
  address = "Příčná 1892/4, Nové Město, 110 00 Praha 1",
  image = "https://images.unsplash.com/photo-1507964878701-3fc78c90510f?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  className,
  onSubmit,
}: Contact34Props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        console.log("Form submitted:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setIsSubmitted(true);
      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 4500);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      form.setError("root", {
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
            {/* Image Side */}
            <motion.div
              className="relative lg:col-span-3"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={image}
                  alt=""
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute right-6 bottom-6 left-6 rounded-2xl bg-background/95 p-6 shadow-lg backdrop-blur-sm lg:right-8 lg:bottom-8 lg:left-8 lg:p-8">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="mb-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                      Email
                    </p>
                    <a
                      href={`mailto:${email}`}
                      className="text-sm hover:underline"
                    >
                      {email}
                    </a>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                      Telefon
                    </p>
                    <a
                      href={`tel:${phone}`}
                      className="text-sm hover:underline"
                    >
                      {phone}
                    </a>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-medium tracking-wider text-muted-foreground uppercase">
                      Adresa
                    </p>
                    <p className="text-sm">{address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div
              className="flex flex-col justify-center lg:col-span-2"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            >
              <div className="mb-8">
                <p className="mb-3 text-sm font-medium tracking-wider text-muted-foreground uppercase">
                  {tagline}
                </p>
                <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
                  <FadeInText text={title} />
                </h1>
              </div>

              {isSubmitted && (
                <div
                  className={cn(
                    "mb-6 rounded-lg border border-green-500/20 bg-green-500/10 p-4 text-center transition-opacity duration-500",
                    showSuccess ? "opacity-100" : "opacity-0",
                  )}
                >
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">
                    Zpráva byla úspěšně odeslána!
                  </p>
                </div>
              )}

              <form onSubmit={form.handleSubmit(handleFormSubmit)}>
                <FieldGroup>
                  <Controller
                    control={form.control}
                    name="name"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Jméno <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Vaše jméno"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          E-mail <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          type="email"
                          aria-invalid={fieldState.invalid}
                          placeholder="vy@firma.cz"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="message"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Zpráva <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Textarea
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Řekněte nám o vašich cílech a situaci vaší firmy..."
                          rows={5}
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  {form.formState.errors.root && (
                    <p className="text-sm text-destructive">
                      {form.formState.errors.root.message}
                    </p>
                  )}

                  <Button
                    size="lg"
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? (
                      <>
                        <LoaderIcon className="mr-2 size-4 animate-spin" />
                        Odesílám...
                      </>
                    ) : (
                      <>
                        Odeslat zprávu
                        <ArrowUpRight className="ml-2 size-4" />
                      </>
                    )}
                  </Button>
                </FieldGroup>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact34 };
