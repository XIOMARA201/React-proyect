import React from 'react'
import { NavLink } from 'react-router-dom'
import { Flex, Heading, Stack } from "@chakra-ui/react"

export default function Menu() {
  return (
<Flex 
    align="center"
    justify="center"
    h="100%" 
    pl={4}>
<nav className="Navbar">
        <Stack direction="row" spacing={4}>
        <Heading size="xs">
                       <NavLink className="menu-link" to="/">Home</NavLink>
                      </Heading>
                     
                      <Heading size="xs">
                      <NavLink className="menu-link" to="/AboutUs">Sobre Nosotros</NavLink>
                      </Heading>
                    
                      <Heading size="xs"> 
                      <NavLink className="menu-link" to="/Tasks">Lista De Tareas</NavLink>
                      </Heading>
                    
                    </Stack>
              
        </nav>
        </Flex>
  )
}

