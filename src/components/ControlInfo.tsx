import { Html } from "@react-three/drei";
import React from "react";
import { Grid, List, ListItem, ListItemText, Chip, Grow, GrowProps } from "@mui/material";

// 操作方法
export const ControlInfo = () => {
  const text = "WASD: Move\nSpace: Jump\n1-5: Select Texture\nRMB: Place Box\nAlt+RMB: Remove Box";
  const breakedText = text.split("\n").map((line, key) => (
    <span key={key}>
      {line}
      <br />
    </span>
  ));
  return (
    <Html scale={0.25} position={[0.01, 0.45, -1.5]} transform occlude>
      <Chip label={breakedText} color="primary" sx={{ height: 100 }} />
    </Html>
  );
};
