import { Box, Button, Stack, Typography } from '@mui/material'
import SubjectIcon from '@mui/icons-material/Subject'

import { useAppContext } from '../hooks/useAppContext'

import Zoom from './controls/Zoom'

const Control = () => {
  const { perkState, showGuideModal, showBonusModal, showNoteModal } =
    useAppContext()

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '66px',
        left: '10px',
        right: '10px',
        bottom: '10px',
        pointerEvents: 'none',
      }}
    >
      <Zoom
        sx={{
          position: 'absolute',
          top: '0',
          left: '0',
          pointerEvents: 'auto',
        }}
      />
      <Typography
        sx={{ position: 'absolute', top: '0', right: '0', p: '6px 8px' }}
      >
        SE{perkState.perkCount}
      </Typography>

      <Stack
        gap={1}
        direction="row"
        sx={{
          position: 'absolute',
          bottom: '0',
          right: '0',
          pointerEvents: 'auto',
        }}
      >
        {perkState.isUsingGuide && (
          <Button
            sx={{
              minWidth: '0',
            }}
            onClick={showNoteModal}
          >
            <SubjectIcon />
          </Button>
        )}
        <Button onClick={showGuideModal}>Guide</Button>
      </Stack>
    </Box>
  )
}

export default Control
