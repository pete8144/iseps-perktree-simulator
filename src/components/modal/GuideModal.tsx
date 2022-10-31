import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  Typography,
} from '@mui/material'

import { useAppContext } from '../../hooks/useAppContext'
import { MAX_SE, MIN_SE } from '../../constants'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  width: 600,
  maxWidth: 'calc(100% - 32px)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 2,
  boxShadow: 24,
}

type Props = {
  isVisible: boolean
  onClose: () => any
  onGuideSelect: (se: number) => any
}

const AdjustButton = ({
  value,
  onClick,
}: {
  value: string
  onClick: () => any
}) => (
  <Button
    size="small"
    variant="outlined"
    sx={{
      minWidth: '0',
      mx: 1,
    }}
    onClick={onClick}
  >
    {value}
  </Button>
)

export default function GuideModal({
  isVisible,
  onClose,
  onGuideSelect,
}: Props) {
  const { perkState } = useAppContext()
  const [se, setSe] = useState(perkState.perkCount || 1)

  useEffect(() => {
    if (
      perkState.perkCount &&
      perkState.perkCount >= MIN_SE &&
      perkState.perkCount <= MAX_SE
    ) {
      setSe(perkState.perkCount)
    }
  }, [perkState.perkCount])

  const adjustSe = (value: number) =>
    setSe(Math.max(MIN_SE, Math.min(MAX_SE, se + value)))

  return (
    <Modal open={isVisible} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          View Recommended Perks
        </Typography>
        <Stack
          spacing={1}
          direction="row"
          sx={{
            my: 4,
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <AdjustButton value="-10" onClick={() => adjustSe(-10)} />
          <AdjustButton value="-1" onClick={() => adjustSe(-1)} />
          <FormControl sx={{ textAlign: 'center' }}>
            <InputLabel id="label-se">SE</InputLabel>
            <Select
              labelId="label-se"
              id="input-se"
              value={se}
              onChange={(e) => setSe(parseInt('' + e.target.value))}
              autoWidth
              label="SE"
              size="small"
            >
              {Array(50)
                .fill(null)
                .map((v, i) => (
                  <MenuItem key={i} value={i + 1}>
                    {i + 1}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <AdjustButton value="+1" onClick={() => adjustSe(1)} />
          <AdjustButton value="+10" onClick={() => adjustSe(10)} />
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          sx={{ mt: 2, justifyContent: 'flex-end' }}
        >
          <Button variant="text" onClick={onClose}>
            Close
          </Button>

          <Button variant="contained" onClick={() => onGuideSelect(se)}>
            Select
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}
