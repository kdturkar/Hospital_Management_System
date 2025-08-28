import { Button, PasswordInput, SegmentedControl, TextInput } from '@mantine/core'
import { IconHeartbeat, IconUser, IconStethoscope, IconShieldLock } from '@tabler/icons-react'
import React from 'react'
import { useForm } from '@mantine/form';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const form = useForm({
        initialValues: {
            type: 'PATIENT',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (!value ? 'Password is required' : null),
            confirmPassword: (value, values) => value !== values.password ? 'Passwords do not match' : null,
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
            <div className='w-[450px] p-10 rounded-lg shadow-lg bg-white'>
                <form onSubmit={form.onSubmit(handleSubmit)} className='flex flex-col gap-5 [&_.mantine-Input-input]:border-gray-300 [&_.mantine-Input-input]:border-2 [&_.mantine-Input-input]:border-solid [&_.mantine-Input-input]:rounded-md [&_input]:p-2 [&_.mantine-Input-input]:text-gray-600 focus-within:[&_.mantine-Input-input]:!border-gray-400'>
                    <div className='text-2xl text-bold font-heading text-gray-600 text-center mb-5'>Register</div>

                    <SegmentedControl
                        {...form.getInputProps('type')}
                        fullWidth
                        size="md"
                        radius="md"
                        className="
                        [&_.mantine-SegmentedControl-control]:!border-gray-300 
                          [&_.mantine-SegmentedControl-label]:!font-medium
                        [&_*]:!text-gray-600 
                        [&_.mantine-SegmentedControl-labelActive]:!text-red-500
                        [&_.mantine-SegmentedControl-indicator]:!bg-white [&_.mantine-SegmentedControl-indicator]:!shadow-md"
                        data={[
                            {
                                label: (
                                    <div className="flex items-center gap-2 justify-center">
                                        <IconUser size={20} />
                                        <span>Patient</span>
                                    </div>
                                ),
                                value: 'PATIENT'
                            },
                            {
                                label: (
                                    <div className="flex items-center gap-2 justify-center">
                                        <IconStethoscope size={20} />
                                        <span>Doctor</span>
                                    </div>
                                ),
                                value: 'DOCTOR'
                            },
                            {
                                label: (
                                    <div className="flex items-center gap-2 justify-center">
                                        <IconShieldLock size={20} />
                                        <span>Admin</span>
                                    </div>
                                ),
                                value: 'ADMIN'
                            }
                        ]}
                    />

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

                    <PasswordInput
                        variant="unstyled"
                        size="md"
                        radius="md"
                        placeholder="Confirm Password"
                        {...form.getInputProps('confirmPassword')}
                    />

                    <Button type='submit' variant='filled' className='min-w-full mt-5 !bg-red-500 hover:!bg-red-600'>Register</Button>
                    <div className="text-center text-gray-600">Have an account? <Link to='/login' className="text-red-500 hover:underline">Login</Link></div>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage