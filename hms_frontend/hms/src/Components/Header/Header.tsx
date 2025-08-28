import React from 'react'
import ProfileMenu from './ProfileMenu.tsx'
import { ActionIcon, Button } from '@mantine/core'
import { IconBellRinging, IconLayoutSidebarLeftCollapseFilled } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="bg-light shadow-lg h-16 flex justify-between px-5 w-full items-center">
            <ActionIcon size={'md'} variant="transparent" aria-label="Settings">
                <IconLayoutSidebarLeftCollapseFilled style={{ width: '90%', height: '90%' }} stroke={2} />
            </ActionIcon>
            <div className='flex gap-2 items-center'>
                <Link to="login">
                    <Button>Login</Button>
                </Link>
                <ActionIcon size={'md'} variant="transparent" aria-label="Settings">
                    <IconBellRinging style={{ width: '90%', height: '90%' }} stroke={2} />
                </ActionIcon>
                <ProfileMenu />
            </div>
        </div>
    )
}

export default Header