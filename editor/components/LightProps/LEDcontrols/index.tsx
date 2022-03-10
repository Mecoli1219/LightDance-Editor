import { useEffect, useState } from "react";
// components
import { Box, Typography, ListItemButton, Collapse, Grid } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import LEDcontrolsContents from "./LEDcontrolsContent";
// core
import { LED } from "../../../core/models";
import { editCurrentStatusLED } from "../../../core/actions";

const LEDcontrols = ({
  part,
  currentDancers,
  displayValue,
}: {
  part: string;
  currentDancers: string[];
  displayValue: LED;
}) => {
  // Call core actions to update currentStatus
  const updateCurrentStatus = ({
    src,
    alpha,
  }: {
    src?: string;
    alpha?: number;
  }) => {
    if (!src && !alpha) return;
    const payload = currentDancers.map((dancerName) => ({
      dancerName,
      partName: part,
      value: {
        ...(src && { src }),
        ...(alpha && { alpha }),
      },
    }));
    editCurrentStatusLED({ payload });
  };

  const handleSrcChange = (src: string) => {
    updateCurrentStatus({ src });
  };

  const handleIntensityChange = (alpha: number) => {
    updateCurrentStatus({ alpha });
  };

  // UI
  const [open, setOpen] = useState<boolean>(false);

  const handleExpand = () => {
    setOpen(!open);
  };

  const valueLabelFormat = (value: number) => {
    return value === 15 ? "flash" : value;
  };

  return (
    <>
      <ListItemButton onClick={handleExpand}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box sx={{ width: "10vw" }}>
            <Typography>{part}</Typography>
          </Box>
          <Box sx={{ width: "3vw" }}>
            <Typography>{valueLabelFormat(displayValue.alpha)}</Typography>
          </Box>
          <div>{open ? <ExpandLess /> : <ExpandMore />}</div>
        </Box>
      </ListItemButton>

      <Collapse in={open} timeout="auto" mountOnEnter unmountOnExit>
        <LEDcontrolsContents
          part={part}
          intensity={displayValue.alpha}
          src={displayValue.src}
          handleIntensityChange={handleIntensityChange}
          handleSrcChange={handleSrcChange}
        />
      </Collapse>
    </>
  );
};
export default LEDcontrols;