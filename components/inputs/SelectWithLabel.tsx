import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

type DataObj = {
  id: string;
  description: string;
};

type Props<S> = {
  fieldTitle: string;
  nameInSchema: keyof S & string;
  data: DataObj[];
  className?: string;
};

export default function SelectWithLabel<S>({
  fieldTitle,
  nameInSchema,
  data,
  className,
  ...props
}: Props<S>) {
  const form = useFormContext();

  const itemsList = data.map((item) => (
    <SelectItem value={item.id} id={item.id} key={`${nameInSchema}_${item.id}`}>
      {item.description}
    </SelectItem>
  ));

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
            <Select {...field} onValueChange={field.onChange}>
              <SelectTrigger
                id={nameInSchema}
                className={`w-full max-w-xs ${className}`}
              >
                <SelectValue placeholder="Select State" />
              </SelectTrigger>
              <SelectContent>{itemsList}</SelectContent>
            </Select>
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
