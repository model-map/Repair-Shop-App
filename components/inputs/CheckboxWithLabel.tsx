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

import { Checkbox } from "@/components/ui/checkbox";
import { InputHTMLAttributes } from "react";
import { Label } from "@/components/ui/label";

type Props<S> = {
  fieldTitle: string;
  message: string;
  fieldDescription?: string;
  nameInSchema: keyof S & string;
  disabled?: boolean;
  className?: string;
};

export function CheckboxWithLabel<S>({
  fieldTitle,
  message,
  fieldDescription,
  nameInSchema,
  className,
  disabled = false,
}: Props<S>) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={nameInSchema}
      render={({ field }) => (
        <FormItem className="w-full flex items-center gap-2">
          {/* FORM LABEL */}
          <FormLabel className="text-base w-1/3" htmlFor={nameInSchema}>
            {fieldTitle}
          </FormLabel>
          {/* FORM CONTROL */}
          <div className="flex items-center gap-2">
            <FormControl>
              <Checkbox
                id={nameInSchema}
                className={`${className}`}
                checked={field.value}
                {...field}
                onCheckedChange={field.onChange}
                disabled={disabled}
              />
            </FormControl>
            {message}
          </div>
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
