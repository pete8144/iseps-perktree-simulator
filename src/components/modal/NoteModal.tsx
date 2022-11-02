import { Box, Button, Modal, Stack, Typography } from '@mui/material'

import { useAppContext } from '../../hooks/useAppContext'
import { PERK_50 } from '../../constants/perks/recommendation'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate3d(-50%, -50%, 0)',
  width: 200,
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

export default function NoteModal({ isVisible, onClose }: Props) {
  const { perkState } = useAppContext()
  const se = perkState.perkCount
  const seInfo = PERK_50[se - 1]
  const isRespec = seInfo?.drop.length > 0

  return (
    <Modal open={isVisible} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          SE{perkState.perkCount}
        </Typography>

        <Typography>
          Drop:{' '}
          {isRespec ? (
            <Typography component="span" fontWeight="bold">
              {seInfo.drop.join(', ')}
            </Typography>
          ) : (
            'None'
          )}
        </Typography>
        <Typography>
          Take:{' '}
          <Typography component="span" fontWeight="bold">
            {seInfo?.pick.join(', ')}
          </Typography>
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
