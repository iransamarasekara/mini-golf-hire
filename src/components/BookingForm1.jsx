import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/ui/input";

import { Button } from "../components/ui/button";

const BookingForm1 = () => {
  const form = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      contact_number: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <div className="mt-10">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <h5>Customer Details</h5>
          <div className="flex justify-between gap-4">
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      type="text"
                      className="shad-input w-full"
                      {...field}
                      placeholder="First Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      type="text"
                      className="shad-input w-full"
                      {...field}
                      placeholder="Last Name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    className="shad-input"
                    {...field}
                    placeHolder={"Email Address"}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contact_number"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="text"
                    className="shad-input max-w-[28rem]"
                    {...field}
                    placeHolder={"Contact Number (Mobile)"}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="shad-button_primary px-36 py-7 mx-auto mt-8"
          >
            NEXT
          </Button>
        </form>
      </div>
    </Form>
  );
};

export default BookingForm1;
