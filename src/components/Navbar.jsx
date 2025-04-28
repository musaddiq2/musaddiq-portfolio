import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Skills', path: '#skills' },
  { name: 'Projects', path: '#projects' },
  { name: 'Experience', path: '#experience' },
  { name: 'Contact', path: '#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar position="fixed" className="bg-gray-900/80 backdrop-blur-md">
        <Toolbar>
          <div className="flex-grow">
            <a href="#home" className="text-2xl font-bold text-cyan-400">
              Sayed Musaddiq
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-white hover:text-cyan-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            className="md:hidden"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{ paper: 'bg-gray-900' }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item.name}
              button
              component="a"
              href={item.path}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={item.name} className="text-white" />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </motion.div>
  );
};

export default Navbar;