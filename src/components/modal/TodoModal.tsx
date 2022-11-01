import React from 'react'
import { Box, Button, Modal, Stack, Typography } from '@mui/material'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  width: 400,
  maxWidth: 'calc(100% - 32px)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 2,
  boxShadow: 24,
}

type Props = {
  isVisible: boolean
  onClose: () => any
}

const todoList = [
  'Infinity Perk',
  'Overall bonus for current tree setup',
  'Efficiency of individual perk in the setup',
  'Pinch to zoom tree',
  '...',
]

export default function TodoModal({ isVisible, onClose }: Props) {
  return (
    <Modal open={isVisible} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Todo
        </Typography>
        <Typography component="ul">
          {todoList.map((t) => (
            <Typography key={t} component="li">
              {t}
            </Typography>
          ))}
        </Typography>
        <Stack
          spacing={2}
          direction="row"
          sx={{ mt: 2, justifyContent: 'flex-end' }}
        >
          <Button variant="contained" onClick={onClose}>
            Close
          </Button>
        </Stack>
      </Box>
    </Modal>
  )
}
