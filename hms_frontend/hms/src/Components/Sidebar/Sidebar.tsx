import { Avatar } from '@mantine/core'
import { Text } from '@mantine/core';
import { IconCalendarCheck, IconHeartbeat, IconLayoutGrid, IconMoodSick, IconStethoscope, IconVaccine } from '@tabler/icons-react'
import React from 'react'
import { NavLink } from 'react-router-dom';

const links = [
    {
        name: "Dashboard",
        url: "/dashboard",
        icon: <IconLayoutGrid stroke={1.5} />
    },
    {
        name: "Doctors",
        url: "/doctors",
        icon: <IconStethoscope stroke={1.5} />
    },
    {
        name: "Patients",
        url: "/patients",
        icon: <IconMoodSick stroke={1.5} />
    },
    {
        name: "Appointments",
        url: "/appointments",
        icon: <IconCalendarCheck stroke={1.5} />
    },
    {
        name: "Pharmacy",
        url: "/pharmacy",
        icon: <IconVaccine stroke={1.5} />
    }
]

const Sidebar = () => {
    return (
        <div className='flex'>
            <div className="w-64">

            </div>
            <div className="w-64 fixed h-screen hide-scrollbar overflow-y-auto bg-dark flex flex-col gap-7 items-center">
                <div className='fixed py-3 w-48 justify-center bg-dark z-[500] text-primary-400 flex items-center gap-1'>
                    <IconHeartbeat size={33} stroke={2.5} />
                    <span className="font-heading font-semibold text-3xl">Pulse</span>
                </div>
                <div className="flex flex-col mt-20 gap-5">
                    <div className='flex flex-col gap-1 items-center'>
                        <div className='p-1 bg-light rounded-full shadow-lg'>
                            <Avatar variant='filled' className='cursor-pointer' size={'xl'} src="avatar.png" />
                        </div>
                        <span className='font-medium text-light'>Marshal</span>
                        <Text c='dimmed' size='sm' className='text-light'>Admin</Text>
                    </div>
                    <div className='flex flex-col gap-1'>
                        {
                            links.map((link) => {
                                return <NavLink to={link.url} key={link.url} className={({ isActive }) => `flex items-center gap-3 w-full font-medium text-light px-4 py-5 rounded-lg ${isActive ? "bg-primary-400" : "hover:bg-gray-100 hover:text-dark"}`}>
                                    {link.icon}
                                    <span>{link.name}</span>
                                </NavLink>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar