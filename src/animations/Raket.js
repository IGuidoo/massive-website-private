"use client"

import React, { memo } from 'react';
import Spline from '@splinetool/react-spline';

const SplineRaket = memo(() => {
  SplineRaket.displayName = 'SplineRaket';
  
  return (
    <Spline style={{width: "750px" , height: "750px" , top: "0px" , right: "0px" , position: "absolute"}} scene="https://prod.spline.design/bdCB6XfMj2PeW29a/scene.splinecode" />
  );
});

export default SplineRaket;

