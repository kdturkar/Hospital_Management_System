import { Button, PasswordInput, TextInput } from '@mantine/core'
import { IconHeartbeat } from '@tabler/icons-react'
import React from 'react'
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const form = useForm({
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (!value ? 'Password is required' : null)
        },
    });
    const handleSubmit = (values: typeof form.values) => {
        console.log(values);
    };
    return (
        <div style={{ background: 'linear-gradient(rgb(255 255 255 / 65%), rgb(0 0 0 / 70%)), url(/bg_8.jpg)' }} className='h-screen w-screen !bg-cover !bg-center !bg-no-repeat flex flex-col justify-center items-center'>
            <div className='py-3 w-48 justify-center text-red-500 flex items-center gap-1'>
                <IconHeartbeat size={64} stroke={2.5} />
                <span className="font-heading font-semibold text-5xl">Pulse</span>
            </div>
            <div className='w-[450px] p-10 rounded-lg shadow-lg bg-white '>
                <form onSubmit={form.onSubmit(handleSubmit)} className='flex flex-col gap-5 [&_.mantine-Input-input]:border-gray-300 [&_.mantine-Input-input]:border-2 [&_.mantine-Input-input]:border-solid [&_.mantine-Input-input]:rounded-md [&_input]:p-2 [&_.mantine-Input-input]:text-gray-600 focus-within:[&_.mantine-Input-input]:!border-gray-400'>
                    <div className='text-2xl text-bold font-heading text-gray-600  text-center mb-5'>Login</div>
                    <TextInput
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Email"
                        {...form.getInputProps('email')}
                    />
                    <PasswordInput
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Password"
                        {...form.getInputProps('password')}
                    />
                    <Button type='submit' variant='filled' className='min-w-full mt-5 !bg-red-500 hover:!bg-red-600'>Login</Button>
                    <div className="text-center">Don't have an account? <Link to='/register' className="text-red-500 hover:underline">Register</Link></div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage