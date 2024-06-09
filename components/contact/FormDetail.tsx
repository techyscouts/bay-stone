'use client';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { storyblokEditable } from '@storyblok/react';
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

const formSchema = z.object({
  name: z
    .string()
    .min(4, 'Name must be at least 4 characters')
    .max(50, 'Name must be at most 50 characters'),
  emailAddress: z.string().email('Invalid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(500, 'Message must be at most 500 characters'),
});

const FormDetail = ({ blok }: { blok: any }) => {
  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      emailAddress: '',
      message: '',
    },
  });
  return (
    <section
      className="flex-center py-10 md:py-20"
      style={{
        backgroundImage: `url(${blok.form_background.filename})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      {...storyblokEditable(blok)}
    >
      <div className="flex w-full max-w-[970px] flex-col items-center gap-10 rounded-lg bg-white-4 p-10">
        <header className="flex flex-col items-center gap-3">
          <h2
            className="text-24 xl:text-32 font-light text-blue-main"
            {...storyblokEditable(blok)}
          >
            {blok.subheader}
          </h2>
          <h1
            className="text-32 xl:text-48 font-medium text-black-1"
            {...storyblokEditable(blok)}
          >
            {blok.header}
          </h1>
        </header>
        <p className="text-16 text-center font-light text-black-1">
          {blok.description}
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex w-full max-w-[800px] flex-col items-center gap-5"
          >
            <div className="flex w-full flex-col gap-5 lg:flex-row">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <div className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          placeholder="Name*"
                          className="w-full rounded-none border-2 border-blue-main bg-white-1 font-light text-black-1 placeholder:text-black-1 focus-visible:ring-0 "
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-12 text-red-500" />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <div className="flex w-full flex-col">
                      <FormControl>
                        <Input
                          placeholder="Email*"
                          className="w-full rounded-none border-2 border-blue-main bg-white-1 text-black-1 placeholder:text-black-1 focus-visible:ring-0"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-12 text-red-500" />
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <div className="flex w-full flex-col">
                    <FormControl>
                      <Textarea
                        placeholder="Message*"
                        className="w-full rounded-none border-2 border-blue-main bg-white-1 text-black-1 placeholder:text-black-1 focus-visible:ring-0 "
                        rows={6}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-12 text-red-500" />
                  </div>
                </FormItem>
              )}
            />
            <Button className="blue-main-bg max-w-[140px]">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default FormDetail;
