"use client";

import { useFormContext } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "../ui/textarea";
import { TextareaHTMLAttributes } from "react";

type Props<S> = {
  fieldTitle: string;
  fieldDescription?: string;
  nameInSchema: keyof S & string;
  className: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextAreaWithLabel<S>({
  fieldTitle,
  fieldDescription,
  nameInSchema,
  className,
  ...props
}: Props<S>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem>
          {/* FORM LABEL */}
          <FormLabel className="text-base" htmlFor={nameInSchema}>
            {fieldTitle}
          </FormLabel>
          {/* FORM CONTROL */}
          <FormControl>
            <Textarea
              id={nameInSchema}
              className={`w-full max-w-xs disabled:text-blue-500 dark:disabled:text-yellow-300 disabled:opacity-75 ${className}`}
              placeholder={fieldDescription}
              {...field}
              {...props}
            />
          </FormControl>
          {/* FORM DESCRIPTION */}
          {/* {fieldDescription?.trim() && (
            <FormDescription>{fieldDescription}</FormDescription>
          )} */}
          {/* FORM MESSAGE FOR VALIDATION */}
          <p className="text-sm text-red-500 min-h-[1.25rem]">
            <FormMessage />
          </p>
          {/* <FormMessage />  */}
        </FormItem>
      )}
    />
  );
}
