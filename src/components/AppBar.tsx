import React from 'react'
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { useAppContext } from '../hooks/useAppContext'

interface Props {
  window?: () => Window
}

const drawerWidth = 240

export default function MyAppBar(props: Props) {
  const { window } = props
  const {
    isMobileDrawerOpen,
    setMobileDrawerOpen,
    showTodoModal,
    showAboutModal,
  } = useAppContext()

  const navItems = [
    { label: 'Todo', onClick: showTodoModal },
    { label: 'About', onClick: showAboutModal },
  ]

  const handleDrawerToggle = () => {
    setMobileDrawerOpen(!isMobileDrawerOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        ISEPS Perk Tree Sim
      </Typography>
      <Divider />
      <List>
        {navItems.map(({ label, onClick }) => (
          <ListItem key={label} disablePadding onClick={onClick}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            ISEPS Perk Tree Simulator
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(({ label, onClick }) => (
              <Button key={label} sx={{ color: '#fff' }} onClick={onClick}>
                {label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={isMobileDrawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}
