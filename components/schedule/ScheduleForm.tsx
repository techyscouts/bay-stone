'use client';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

const ScheduleForm = () => {
  const form = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <section className="flex w-full max-w-[1050px] flex-col items-center gap-10 rounded-lg bg-white-4 p-5 md:p-10">
      <h1 className="text-center text-3xl font-medium text-blue-main xl:text-5xl">
        Schedule Your Appointment, Today!
      </h1>
      <p className="text-center text-base font-light leading-6 text-black-1">
        Complete the information below, add comments if needed, and we will call
        you back to confirm your appointment.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full max-w-[820px] flex-col gap-5"
        >
          <div className="flex w-full flex-col justify-center gap-5 xl:flex-row">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="First Name*"
                      {...field}
                      className="w-full text-base font-light leading-6 text-black-1 placeholder:text-base placeholder:font-light placeholder:text-black-1 focus-visible:ring-0 focus-visible:ring-offset-0 xl:w-[400px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Last Name*"
                      {...field}
                      className="w-full text-base font-light leading-6 text-black-1 placeholder:text-base placeholder:font-light placeholder:text-black-1 focus-visible:ring-0 focus-visible:ring-offset-0 xl:w-[400px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full flex-col justify-center gap-5 xl:flex-row">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Phone Number*"
                      {...field}
                      className="w-full text-base font-light leading-6 text-black-1 placeholder:text-base placeholder:font-light placeholder:text-black-1 focus-visible:ring-0 focus-visible:ring-offset-0 xl:w-[400px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email Address*"
                      {...field}
                      className="w-full text-base font-light leading-6 text-black-1 placeholder:text-base placeholder:font-light placeholder:text-black-1 focus-visible:ring-0 focus-visible:ring-offset-0 xl:w-[400px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="aboutUs"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="How Did You Hear About Us?*"
                    {...field}
                    className="w-full text-base font-light leading-6 text-black-1 placeholder:text-base placeholder:font-light placeholder:text-black-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Comment*"
                    {...field}
                    className="w-full text-base font-light leading-6 text-black-1 placeholder:text-base placeholder:font-light placeholder:text-black-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-center text-base font-light leading-6 text-black-1">
            By Submitting This Form, You Agree To Receive Text Messages*
          </p>
          <div className="flex-center">
            <Button
              type="submit"
              className="blue-main-bg max-w-[176px] text-base font-semibold leading-6 text-white-1"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
};

export default ScheduleForm;
