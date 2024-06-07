import React from 'react';
import styled from 'styled-components';

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const OverlayDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsl(0, 0%, 27%, 0.7); 
  z-index: 10;
`;

const OverlayComponent: React.FC<OverlayProps> = ({ isOpen, onClose }) => {
  return isOpen ? <OverlayDiv onClick={onClose} /> : null;
};

export default OverlayComponent;
