import { Avatar, createStyles, Menu, Text } from '@mantine/core'
import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'
import { TbEdit, TbLogout, TbUsers } from 'react-icons/tb'

const useStyles = createStyles((theme) => ({
  item: {
    '&[data-hovered]': {
      backgroundColor: theme.colors.gray[2],
    },
  },
}))

const UserAvatar = () => {
  const { isAuthenticated, currentUser, logOut, hasRole } = useAuth()

  const { classes } = useStyles()

  if (isAuthenticated) {
    return (
      <Menu
        shadow="md"
        classNames={classes}
        withArrow
        arrowPosition="center"
        position="left-start"
        width={240}
      >
        <Menu.Target>
          <Avatar
            radius="xl"
            src={null}
            alt={currentUser?.email}
            color="gray"
            className="hover:cursor-pointer"
          >
            {generateInitials(currentUser?.email)}
          </Avatar>
        </Menu.Target>

        <Menu.Dropdown>
          <div className="flex flex-col items-center justify-center mb-4">
            <Avatar
              radius="xl"
              size="lg"
              src={null}
              alt={currentUser?.email}
              color="blue.5"
            >
              {generateInitials(currentUser?.email)}
            </Avatar>

            <span className="max-w-[25ch] truncate text-base text-slate-600">
              {currentUser?.email}
            </span>
            <span className="max-w-[20ch] truncate text-xs text-slate-500">
              {capitaliseFirstLetter(currentUser?.roles as string)}
            </span>
          </div>

          <Menu.Item
            icon={<TbLogout size={14} />}
            color="red.7"
            onClick={logOut}
          >
            <Text size="xs">Log Out</Text>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    )
  } else {
    return <Link to={routes.login()}>Login</Link>
  }
}

export default UserAvatar

function generateInitials(nameOrEmail: string): string {
  if (!nameOrEmail) {
    return ''
  }

  if (nameOrEmail.includes('@')) {
    // Return the first two characters of the email address.
    return nameOrEmail.substring(0, 2).toUpperCase()
  } else {
    // Return the first character of the first two words in the name.
    const words = nameOrEmail.split(' ')
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase()
    } else {
      return (
        words[0].substring(0, 1).toUpperCase() +
        words[1].substring(0, 1).toUpperCase()
      )
    }
  }
}

function capitaliseFirstLetter(s: string) {
  if (!s) {
    return ''
  }
  return s.charAt(0).toUpperCase() + s.slice(1)
}
