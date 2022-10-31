import * as React from 'react'
import { Box, Button, Modal, Stack, Typography } from '@mui/material'

import { ALL_PERKS, PERK_COLOR } from '../../constants'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  width: 600,
  maxWidth: 'calc(100% - 32px)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
}

type Props = {
  isVisible: boolean
  data: {
    code: string
    isActivated: boolean
  }
  onClose: () => any
  onActivate: () => any
  onDeactivate: () => any
}

export default function PerkInfoModal({
  isVisible,
  data,
  onClose,
  onActivate,
  onDeactivate,
}: Props) {
  if (!data) return null

  const perk = ALL_PERKS.find((p) => p.code === data.code)

  if (perk == null) return null

  return (
    <Modal open={isVisible} onClose={onClose}>
      <Box sx={style}>
        <Typography
          variant="h6"
          component="h2"
          sx={{
            textShadow: '0 0 5px rgba(0, 0, 0, 0.8)',
            bgcolor: '#' + PERK_COLOR[perk.type].toString(16),
            p: 2,
          }}
        >
          {perk.code} - {perk.name}
        </Typography>
        <Box sx={{ p: 2 }}>
          <Typography component="div">
            <Typography component="span">Bonus:</Typography>
            <Typography component="ul">
              {perk.bonus.map((b, i) => (
                <Typography key={i} component="li">
                  {b}
                </Typography>
              ))}
            </Typography>
          </Typography>
          <Typography component="div">
            <Typography component="span">Status: </Typography>
            <Typography component="span" sx={{ fontWeight: 'bold' }}>
              {data.isActivated ? 'Acquired' : 'Not Acquired'}
            </Typography>
          </Typography>
          {/* {data.isActivated && (
            <Typography component="div">
              <Typography component="span">Effects:</Typography>
            </Typography>
          )} */}
          <Stack
            spacing={2}
            direction="row"
            sx={{ mt: 2, justifyContent: 'flex-end' }}
          >
            <Button
              variant="text"
              onClick={data.isActivated ? onDeactivate : onActivate}
            >
              {data.isActivated ? 'Drop this perk' : 'Get this perk'}
            </Button>
            <Button variant="contained" onClick={onClose}>
              Close
            </Button>
          </Stack>
        </Box>
      </Box>
    </Modal>
  )
}
