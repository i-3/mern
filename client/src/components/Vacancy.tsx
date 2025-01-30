import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Breadcrumbs from './breadcrumbs';

export type formSchema = {
  employer: string;
  vacancy: string;
  state: 'pending' | 'reacted';
};

export default function Vacancy() {
  const API_URL = import.meta.env.VITE_API_URL;

  const navigate = useNavigate();
  const [isNew, setIsNew] = useState(true);
  const params = useParams();

  const form = useForm({
    defaultValues: async () => {
      if (!params.id)
        return {
          employer: '',
          vacancy: '',
          state: 'pending',
        };
      setIsNew(false);
      const response = await fetch(`${API_URL}/record/vacancies/${params.id}`);
      if (!response.ok) {
        // console.error(`An error has occurred: ${response.statusText}`);
        return {
          employer: '',
          vacancy: '',
          state: 'pending',
        };
      }

      const vacancy = await response.json();
      if (!vacancy) {
        // console.warn(`Record with id ${params.id} not found`);
        navigate('/');
        return;
      }
      return vacancy;
    },
  });

  async function onSubmit(values: any) {
    try {
      let response;
      if (isNew) {
        response = await fetch(`${API_URL}/record/vacancies`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
      } else {
        response = await fetch(`${API_URL}/record/vacancies/${params.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
      }

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      // console.error('A problem occurred with your fetch operation: ', error);
    } finally {
      navigate('/');
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-8 mx-auto max-w-sm mt-48'
      >
        <Breadcrumbs
          breadcrumbs={[
            { label: 'Vacancies', href: '/' },
            {
              label: 'Edit Vacancy',
              href: `/${params.id}`,
              active: true,
            },
          ]}
        />

        <FormField
          control={form.control}
          name='employer'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employer</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>

              {/* <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage /> */}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='vacancy'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vacancy</FormLabel>
              <FormControl>
                <Input placeholder='' {...field} />
              </FormControl>

              {/* <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage /> */}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='state'
          render={({ field }) => (
            <FormItem className='ml-8'>
              <FormLabel>State</FormLabel>
              {/* <FormLabel> {field.value}</FormLabel> */}

              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  // defaultValue={field.value}
                  value={field.value}
                >
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='pending' id='r0' />
                    <Label htmlFor='r0'>Pending</Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem value='reacted' id='r1' />
                    <Label htmlFor='r1'>Reacted</Label>
                  </div>
                </RadioGroup>
              </FormControl>

              {/* <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage /> */}
            </FormItem>
          )}
        />

        <Button type='submit' className='ml-8'>
          Submit
        </Button>
      </form>
    </Form>
  );
}
