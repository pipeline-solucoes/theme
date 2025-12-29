"use client";

import React, { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const ButtonStyled = styled(IconButton, {
  shouldForwardProp: (prop) => !['$show', '$background_color', '$border_radius', '$background_color_hover'].includes(prop as string),
})<{
  $show: string;
  $background_color?: string;
  $border_radius: string;
  $background_color_hover?: string;
}>(({ $show, $background_color, $border_radius, $background_color_hover }) => ({
  display: $show === 'true' ? 'flex' : 'none',
  position: 'fixed',
  bottom: '165px',
  right: '20px',
  cursor: 'pointer',
  zIndex: 1000,
  width: 'auto',
  height: 'auto',
  border: `1px solid ${$background_color || '#00000000'}`,
  backgroundColor: $background_color || '#00000000',
  borderRadius: $border_radius,
  '&:hover': {
    backgroundColor: $background_color_hover || $background_color,
  },
}));


export interface ScrollToTopButtonProps {   
    show: boolean;            
    border_radius: string;
    background_color: string;        
    background_color_hover: string;
    children: React.ReactNode;
  }

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({show, border_radius, 
    background_color, background_color_hover, children}) => {

        const [showButton, setshowButton] = useState(show);

        const handleScroll = () => {

          setshowButton(window.scrollY > 0);
        };
      
        useEffect(() => {
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
      
        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        };
      
        return (
          <ButtonStyled 
            $background_color={background_color}
            $border_radius={border_radius}
            $background_color_hover={background_color_hover}             
            onClick={scrollToTop} aria-label="ir para o topo" 
            $show={showButton.toString()}>
            {children}
          </ButtonStyled>
        );
};

export default ScrollToTopButton;



