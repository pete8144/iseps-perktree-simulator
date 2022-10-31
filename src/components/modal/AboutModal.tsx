import { Box, Link, Modal, Stack, Typography } from '@mui/material'

import { GitHub } from '@mui/icons-material'
import Discord from '../icons/Discord'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  width: 400,
  maxWidth: 'calc(100% - 32px)',
  // textAlign: 'center',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  p: 2,
  boxShadow: 24,
}

type Props = {
  isVisible: boolean
  onClose: () => any
}

const perkRecommendedBy = ['perebble#9447', 'Akoriya#0649', 'Feii#8783']

export default function AboutModal({ isVisible, onClose }: Props) {
  return (
    <Modal open={isVisible} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h5" component="h2">
          ISEPS Perk Tree Simulator
        </Typography>
        <Stack spacing={1} sx={{ px: 3, mt: 2 }}>
          <Typography>A fan-made Perk Tree Simulator</Typography>
          <Typography>Created by: Pete#8144</Typography>
          <Typography>Perk recommendations by:</Typography>
          <Typography component="ul">
            {perkRecommendedBy.map((u) => (
              <Typography key={u} component="li">
                {u}
              </Typography>
            ))}
          </Typography>
        </Stack>
        <Stack
          spacing={2}
          direction="row"
          sx={{ width: 'fit-content', mt: 4, mx: 'auto' }}
        >
          <Link
            href="https://github.com/pete8144/iseps-perktree-simulator"
            rel="noopener noreferrer"
            underline="none"
          >
            <GitHub sx={{ color: '#FFF' }} />
          </Link>
          <Link
            href="https://discord.gg/iseps"
            rel="noopener noreferrer"
            underline="none"
          >
            <Discord />
          </Link>
        </Stack>
      </Box>
    </Modal>
  )
}
